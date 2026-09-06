"""Extract booking PDFs from supplied .eml confirmations into public site assets.

The script deliberately keeps only PDF attachments and writes a small, non-sensitive
manifest keyed by check-in/check-out dates. It never copies the original email body.
"""

from __future__ import annotations

from email import policy
from email.header import decode_header
from email.parser import BytesParser
from pathlib import Path
import json
import re
import shutil
import sys


def decode_header_value(value: str | None) -> str:
    if not value:
        return ""
    parts: list[str] = []
    for part, encoding in decode_header(value):
        if isinstance(part, bytes):
            parts.append(part.decode(encoding or "utf-8", errors="replace"))
        else:
            parts.append(part)
    return "".join(parts)


def extract_dates(message) -> tuple[str, str]:
    html = "\n".join(
        part.get_content() for part in message.walk()
        if part.get_content_type() == "text/html"
    )
    check_in = re.search(
        r"Check-In</span>[\s\S]*?<td[^>]*>\s*(20\d{2}-\d{2}-\d{2})\s*</td>", html
    )
    check_out = re.search(
        r"Check-Out</span>[\s\S]*?<td[^>]*>\s*(20\d{2}-\d{2}-\d{2})\s*</td>", html
    )
    if not check_in or not check_out:
        raise ValueError("Could not find check-in/check-out dates")
    return check_in.group(1), check_out.group(1)


def safe_stem(value: str) -> str:
    value = re.sub(r"[<>:\\/?*|\"]", "-", value).strip(" .-")
    return value or "hotel-confirmation"


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: extract-booking-attachments.py <eml-dir> <output-dir>")
    source_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    manifest = []
    for eml in sorted(source_dir.glob("*.eml")):
        message = BytesParser(policy=policy.default).parse(eml.open("rb"))
        check_in, check_out = extract_dates(message)
        pdfs = []
        for part in message.iter_attachments():
            content_type = part.get_content_type()
            filename = decode_header_value(part.get_filename())
            payload = part.get_payload(decode=True)
            if content_type != "application/pdf" or not payload:
                continue
            name = safe_stem(filename.removesuffix(".pdf"))
            target = output_dir / f"stay-{check_in}-{name}.pdf"
            target.write_bytes(payload)
            pdfs.append(target.name)
        if not pdfs:
            raise ValueError(f"No PDF attachment extracted from {eml.name}")
        manifest.append({"checkIn": check_in, "checkOut": check_out, "files": pdfs})

    (output_dir / "stay-manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


if __name__ == "__main__":
    main()
