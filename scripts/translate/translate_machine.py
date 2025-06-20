"""
Simple Translation Automation Service
------------------------------------
Watches .po files and translates missing entries automatically.
"""

import logging
import os
import sys
import time
from pathlib import Path
from typing import List, Optional

import httpx
import polib
from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer

# Configuration
LOCALES_PATH = Path(os.environ.get("LOCALES_PATH", "/"))
TRANSLATE_URL = os.environ.get("TRANSLATE_URL", "http://localhost:5000/translate")
SOURCE_LANG = os.environ.get("SOURCE_LANG", "en")

# Setup logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s: %(message)s"
)
logger = logging.getLogger(__name__)


def translate_text(text: str, target_lang: str) -> Optional[str]:
    """Translate text using external service."""
    try:
        response = httpx.post(
            TRANSLATE_URL,
            json={"q": text, "source": SOURCE_LANG, "target": target_lang},
            timeout=10,
        )
        response.raise_for_status()
        return response.json().get("translatedText")
    except Exception as e:
        logger.error(f"Translation failed: {e}")
        return None


def process_po_file(filepath: Path) -> None:
    """Process a PO file: remove obsolete entries and translate missing ones."""
    locale = filepath.stem
    logger.info(f"Processing {filepath}")

    po = polib.pofile(str(filepath))
    changed = False

    # Remove obsolete entries
    obsolete = po.obsolete_entries()
    if obsolete:
        for entry in obsolete:
            po.remove(entry)
        logger.info(f"Removed {len(obsolete)} obsolete entries")
        changed = True

    # Translate missing entries
    missing = po.untranslated_entries()
    translated_count = 0
    for entry in missing:
        translation = translate_text(entry.msgid, locale)
        if translation:
            entry.msgstr = translation
            translated_count += 1
            changed = True

    if translated_count:
        logger.info(f"Translated {translated_count} entries")

    if changed:
        po.save(str(filepath))
        logger.info(f"Saved {filepath}")


def get_po_files() -> List[Path]:
    """Get all .po files in the locales directory."""
    return list(LOCALES_PATH.glob("*.po"))


def validate_directory() -> bool:
    """Check if locales directory exists and is writable."""
    if not LOCALES_PATH.exists():
        logger.error(f"Directory not found: {LOCALES_PATH}")
        return False

    if not LOCALES_PATH.is_dir():
        logger.error(f"Not a directory: {LOCALES_PATH}")
        return False

    # Test write permissions
    test_file = LOCALES_PATH / ".test"
    try:
        test_file.write_text("test")
        test_file.unlink()
        return True
    except Exception as e:
        logger.error(f"Directory not writable: {e}")
        return False


class FileWatcher(FileSystemEventHandler):
    """Watch for .po file changes."""

    def on_modified(self, event):
        src_path = event.src_path
        if isinstance(src_path, bytes):
            src_path = src_path.decode()
        elif isinstance(src_path, bytearray):
            src_path = src_path.decode()
        elif isinstance(src_path, memoryview):
            src_path = src_path.tobytes().decode()
        else:
            src_path = str(src_path)
        if not event.is_directory and src_path.endswith(".po"):
            logger.info(f"File changed: {src_path}")
            process_po_file(Path(src_path))

    def on_created(self, event):
        src_path = event.src_path
        if isinstance(src_path, bytes):
            src_path = src_path.decode()
        elif isinstance(src_path, bytearray):
            src_path = src_path.decode()
        elif isinstance(src_path, memoryview):
            src_path = src_path.tobytes().decode()
        else:
            src_path = str(src_path)
        if not event.is_directory and src_path.endswith(".po"):
            logger.info(f"File created: {src_path}")
            process_po_file(Path(src_path))


def watch_files():
    """Start watching for file changes."""
    observer = Observer()
    observer.schedule(FileWatcher(), str(LOCALES_PATH), recursive=False)
    observer.start()

    logger.info(f"Watching {LOCALES_PATH} for changes...")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        logger.info("Stopping...")
        observer.stop()
    observer.join()


def main():
    """Main entry point."""
    logger.info("Starting translation service")

    # Validate setup
    if not validate_directory():
        return 1

    # Process existing files
    po_files = get_po_files()
    if po_files:
        logger.info(f"Processing {len(po_files)} existing files")
        for po_file in po_files:
            process_po_file(po_file)
    else:
        logger.warning("No .po files found")

    # Start watching
    watch_files()
    return 0


if __name__ == "__main__":
    sys.exit(main())
