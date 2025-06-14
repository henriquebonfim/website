import os
import tempfile
from pathlib import Path
from unittest.mock import patch

import polib
import translations


def create_temp_po_file(entries, obsolete_entries=None):
    """Helper to create a temporary .po file with given entries."""
    po = polib.POFile()
    for msgid, msgstr in entries:
        entry = polib.POEntry(msgid=msgid, msgstr=msgstr)
        po.append(entry)
    if obsolete_entries:
        for msgid in obsolete_entries:
            entry = polib.POEntry(msgid=msgid, obsolete=True)
            po.append(entry)
    temp = tempfile.NamedTemporaryFile(delete=False, suffix=".po")
    po.save(temp.name)
    temp.close()
    return temp.name


def test_translate_text_success():
    with patch("translations.httpx.post") as mock_post:
        mock_post.return_value.status_code = 200
        mock_post.return_value.json.return_value = {"translatedText": "Hola"}
        mock_post.return_value.raise_for_status = lambda: None
        result = translations.translate_text("Hello", "es")
        assert result == "Hola"


def test_translate_text_http_error():
    with patch("translations.httpx.post") as mock_post:
        mock_post.side_effect = translations.httpx.HTTPError("error")
        result = translations.translate_text("Hello", "es")
        assert result is None


def test_process_po_file_translates_and_removes(tmp_path):
    # Create a .po file with one untranslated and one obsolete entry
    entries = [("Hello", "")]
    obsolete_entries = ["Obsolete"]
    po_path = create_temp_po_file(entries, obsolete_entries)
    # Patch translate_text to return a fake translation
    with patch("translations.translate_text", return_value="Hola"):
        changed, removed, translated = translations.process_po_file(Path(po_path))
        assert changed is True
        assert removed == 1
        assert translated == 1
        # Check file was updated
        po = polib.pofile(po_path)
        assert po[0].msgstr == "Hola"
        assert all(not e.obsolete for e in po)
    os.remove(po_path)


def test_get_po_files(tmp_path):
    # Create two .po files
    f1 = tmp_path / "a.po"
    f2 = tmp_path / "b.po"
    f1.write_text("")
    f2.write_text("")
    files = translations.get_po_files(tmp_path)
    assert set(f.name for f in files) == {"a.po", "b.po"}


def test_display_statistics(capsys):
    translations.stats.clear()
    translations.stats["es"] = {
        "Before count": 2,
        "Missing": 1,
        "Obsolete": 1,
        "Translated": 1,
        "Removed": 1,
        "After count": 1,
        "Total processed": 2,
    }
    translations.display_statistics()
    out = capsys.readouterr().out
    assert "es" in out
    assert "Before count" in out
    assert "Translated" in out
