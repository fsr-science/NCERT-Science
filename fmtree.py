import json
import mimetypes
import subprocess
from pathlib import Path

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
        if child.name in {"files.json", ".git", ".venv"}:
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
    root_dir = ROOT
    tree = {
        "type": "folder",
        "name": ROOT.name,
        "children": build_tree(root_dir)
    }
    with (ROOT / "files.json").open("w", encoding="utf-8") as f:
        json.dump(tree, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print("✓ files.json generated.")
