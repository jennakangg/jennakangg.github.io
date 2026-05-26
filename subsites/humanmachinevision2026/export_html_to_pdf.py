#!/usr/bin/env python3
from __future__ import annotations

import argparse
import http.server
import os
import shutil
import socketserver
import subprocess
import sys
import threading
import time
from pathlib import Path
from urllib.parse import quote


DEFAULT_BROWSER_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: object) -> None:
        pass


class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Export one or more HTML files to PDF using a headless Chromium browser."
    )
    parser.add_argument(
        "inputs",
        nargs="*",
        help="HTML files to convert. Defaults to every .html file under the current directory.",
    )
    parser.add_argument(
        "--root",
        type=Path,
        default=Path.cwd(),
        help="Project root to serve over HTTP. Defaults to the current directory.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        help="Optional directory for PDFs. Keeps relative paths from --root.",
    )
    parser.add_argument(
        "--browser",
        type=Path,
        help="Explicit browser executable path.",
    )
    parser.add_argument(
        "--port",
        type=int,
        default=0,
        help="Port for the temporary local server. Use 0 to auto-select.",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=20,
        help="Seconds to allow each conversion before failing.",
    )
    parser.add_argument(
        "--virtual-time-budget",
        type=int,
        default=5000,
        help="Milliseconds for page scripts/layout to settle before printing.",
    )
    return parser.parse_args()


def find_browser(explicit_path: Path | None) -> str:
    if explicit_path:
        if explicit_path.exists() and os.access(explicit_path, os.X_OK):
            return str(explicit_path)
        raise FileNotFoundError(f"Browser not executable: {explicit_path}")

    for candidate in DEFAULT_BROWSER_CANDIDATES:
        if os.path.exists(candidate) and os.access(candidate, os.X_OK):
            return candidate

    for name in ("google-chrome", "chromium", "chromium-browser", "microsoft-edge"):
        resolved = shutil.which(name)
        if resolved:
            return resolved

    raise FileNotFoundError(
        "No supported Chromium browser found. Install Chrome/Chromium or pass --browser."
    )


def collect_inputs(root: Path, raw_inputs: list[str]) -> list[Path]:
    if raw_inputs:
        inputs = [Path(item).resolve() for item in raw_inputs]
    else:
        inputs = sorted(root.rglob("*.html"))

    html_files: list[Path] = []
    for path in inputs:
        if path.suffix.lower() not in {".html", ".htm"}:
            raise ValueError(f"Not an HTML file: {path}")
        if not path.exists():
            raise FileNotFoundError(f"Missing input file: {path}")
        html_files.append(path)

    if not html_files:
        raise ValueError("No HTML files found to convert.")

    return html_files


def pdf_path_for(html_path: Path, root: Path, output_dir: Path | None) -> Path:
    rel_path = html_path.resolve().relative_to(root.resolve())
    if output_dir:
        return (output_dir / rel_path).with_suffix(".pdf")
    return html_path.with_suffix(".pdf")


def start_server(root: Path, port: int) -> tuple[ThreadedTCPServer, int, threading.Thread]:
    handler = lambda *args, **kwargs: QuietHandler(*args, directory=str(root), **kwargs)
    server = ThreadedTCPServer(("127.0.0.1", port), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server, int(server.server_address[1]), thread


def to_url(root: Path, file_path: Path, port: int) -> str:
    rel = file_path.resolve().relative_to(root.resolve()).as_posix()
    return f"http://127.0.0.1:{port}/{quote(rel)}"


def convert_file(
    browser: str,
    root: Path,
    html_path: Path,
    pdf_path: Path,
    port: int,
    timeout: int,
    virtual_time_budget: int,
) -> None:
    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    url = to_url(root, html_path, port)

    cmd = [
        browser,
        "--headless=new",
        "--disable-gpu",
        "--run-all-compositor-stages-before-draw",
        f"--virtual-time-budget={virtual_time_budget}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_path}",
        url,
    ]

    result = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        timeout=timeout,
        check=False,
    )
    if result.returncode != 0:
        stderr = result.stderr.strip() or result.stdout.strip() or "unknown browser error"
        raise RuntimeError(f"Failed to convert {html_path}: {stderr}")
    if not pdf_path.exists():
        raise RuntimeError(f"Browser reported success but no PDF was created for {html_path}")


def main() -> int:
    args = parse_args()
    root = args.root.resolve()
    output_dir = args.output_dir.resolve() if args.output_dir else None

    try:
        browser = find_browser(args.browser.resolve() if args.browser else None)
        html_files = collect_inputs(root, args.inputs)
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    server = None
    try:
        server, port, thread = start_server(root, args.port)
        time.sleep(0.2)

        for html_path in html_files:
            pdf_path = pdf_path_for(html_path, root, output_dir)
            print(f"{html_path} -> {pdf_path}")
            convert_file(
                browser=browser,
                root=root,
                html_path=html_path,
                pdf_path=pdf_path,
                port=port,
                timeout=args.timeout,
                virtual_time_budget=args.virtual_time_budget,
            )
        return 0
    except KeyboardInterrupt:
        print("error: interrupted", file=sys.stderr)
        return 130
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1
    finally:
        if server is not None:
            server.shutdown()
            server.server_close()


if __name__ == "__main__":
    raise SystemExit(main())
