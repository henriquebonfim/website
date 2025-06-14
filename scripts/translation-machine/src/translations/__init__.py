import logging
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import httpx
import polib
from tabulate import tabulate

# Configure logging with timestamp
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

# Configuration
PROJECT_ROOT = Path(__file__).resolve().parents[4]
LOCALES_PATH = PROJECT_ROOT / "src" / "shared" / "i18n" / "locales"
TRANSLATE_URL = "http://localhost:5000/translate"
SOURCE_LANG = "en"

# Statistics storage
stats: Dict[str, Dict[str, int]] = {}


def translate_text(text: str, target_lang: str) -> Optional[str]:
    """Translate text using the translation service."""
    try:
        response = httpx.post(
            TRANSLATE_URL,
            json={"q": text, "source": SOURCE_LANG, "target": target_lang},
            timeout=10,
        )
        response.raise_for_status()
        return response.json().get("translatedText")
    except httpx.HTTPError as e:
        logger.error(f"HTTP error translating '{text[:30]}...': {e}")
    except Exception as e:
        logger.error(f"Error translating '{text[:30]}...': {e}")
    return None


def process_po_file(filepath: Path) -> Tuple[bool, int, int]:
    """Process a PO file and translate untranslated entries."""
    locale = filepath.stem
    logger.info(f"→ Processing {filepath} [target: {locale}]")

    po = polib.pofile(filepath)
    before_count = len(po)
    missing_count = len(po.untranslated_entries())
    missing_entries = po.untranslated_entries()
    obsolete_entries = po.obsolete_entries()
    obsolete_count = len(obsolete_entries)

    changed = False
    removed_count = 0
    translated_count = 0

    # Track initial statistics
    stats[locale] = {
        "Before count": before_count,
        "Missing": missing_count,
        "Obsolete": obsolete_count,
        "Translated": 0,
        "Removed": 0,
    }

    # Clean obsolete entries
    if obsolete_entries:
        removed_count = obsolete_count
        for entry in obsolete_entries:
            po.remove(entry)
        changed = True
        stats[locale]["Removed"] = removed_count
        logger.info(f"  Removed {removed_count} obsolete entries")

    # Translate missing entries
    for entry in missing_entries:
        translated = translate_text(entry.msgid, locale)
        if translated:
            entry.msgstr = translated
            translated_count += 1
            changed = True
            logger.info(f"  Translated: {entry.msgid[:30]}... → {translated[:30]}...")

    # Update statistics
    stats[locale]["Translated"] = translated_count

    # Calculate after count
    after_count = len(po)
    stats[locale]["After count"] = after_count
    stats[locale]["Total processed"] = translated_count + removed_count

    if changed:
        po.save(str(filepath))
        logger.info(f"✓ Updated: {filepath}")

    return changed, removed_count, translated_count


def get_po_files(directory: Path) -> List[Path]:
    """Get all PO files from a directory."""
    return list(directory.glob("*.po"))


def display_statistics():
    """Display statistics in a tabular format."""
    if not stats:
        return

    headers = [
        "Language",
        "Before count",
        "Missing",
        "Obsolete",
        "Translated",
        "Removed",
        "After count",
        "Total processed",
    ]

    table_data = [
        [
            lang,
            data["Before count"],
            data["Missing"],
            data["Obsolete"],
            data["Translated"],
            data["Removed"],
            data["After count"],
            data["Total processed"],
        ]
        for lang, data in stats.items()
    ]

    print("\nCatalog statistics for src/shared/i18n/locales/{locale}:")
    print(tabulate(table_data, headers=headers, tablefmt="grid"))


def main() -> int:
    """Main entry point for translation process."""
    start_time = datetime.now()
    logger.info(
        f"Translation process started at {start_time.strftime('%Y-%m-%d %H:%M:%S')}"
    )

    if not LOCALES_PATH.exists():
        logger.error(f"Locales directory not found: {LOCALES_PATH}")
        return 1

    logger.info(f"Looking for .po files in: {LOCALES_PATH}")
    po_files = get_po_files(LOCALES_PATH)

    if not po_files:
        logger.warning(f"No .po files found in {LOCALES_PATH}")
        return 0

    processed = 0
    updated = 0
    total_removed = 0
    total_translated = 0

    for po_file in po_files:
        processed += 1
        changed, removed, translated = process_po_file(po_file)
        if changed:
            updated += 1
        total_removed += removed
        total_translated += translated

    end_time = datetime.now()
    duration = end_time - start_time
    logger.info(f"Processed {processed} files, updated {updated} files")
    logger.info(f"Total removed: {total_removed}, Total translated: {total_translated}")
    logger.info(
        f"Translation process completed in {duration.total_seconds():.2f} seconds"
    )

    # Display final statistics table
    display_statistics()

    return 0


if __name__ == "__main__":
    sys.exit(main())
