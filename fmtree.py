import json
import mimetypes
import subprocess
from pathlib import Path
import argparse

ROOT = Path(__file__).resolve().parent


def blob_sha(path):
    """Return Git's blob SHA, matching the SHA exposed by GitHub."""
    result = subprocess.run(
        ["git", "hash-object", str(path)],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout.strip()


def file_entry(path):
    relative_path = path.relative_to(ROOT).as_posix()
    mime, _ = mimetypes.guess_type(path.name)
    return {
        "type": "file",
        "name": path.name,
        "path": relative_path,
        "sha": blob_sha(path),
        "mime": mime or "application/octet-stream",
    }


def build_tree(path):
    children = []
    for child in sorted(path.iterdir(), key=lambda item: item.name):
        # Always skip these internal/unwanted names
        if child.name in {"files.json", ".git", ".venv"}:
            continue

        # At repository root, ignore any root-level file except README.md
        if path.resolve() == ROOT and child.is_file() and child.name.lower() != "readme.md":
            continue
        if child.is_dir():
            children.append({
                "type": "folder",
                "name": child.name,
                "children": build_tree(child),
            })
        elif child.is_file():
            children.append(file_entry(child))
    return children

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate files.json manifest of the repo tree")
    parser.add_argument("--out", help="Output path for files.json (default: ./files.json)", default=str(ROOT / "files.json"))
    args = parser.parse_args()

    root_dir = ROOT
    tree = {
        "type": "folder",
        "name": ROOT.name,
        "children": build_tree(root_dir)
    }

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open("w", encoding="utf-8") as f:
        json.dump(tree, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"✓ files.json generated at {out_path}")
