const treeEl = document.getElementById("tree");
const searchInput = document.getElementById("searchInput");
const openFileLink = document.getElementById("openFileLink");
const pdfFrame = document.getElementById("pdfFrame");
const emptyState = document.getElementById("emptyState");

let treeData = null;
let expanded = new Set();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getFileIcon(name) {
  const lower = name.toLowerCase();
  if (lower.endsWith(".pdf")) return "📄";
  if (lower.endsWith(".md")) return "📝";
  if (lower.endsWith(".html")) return "🌐";
  if (lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".webp")) return "🖼️";
  return "📁";
}

function renderTree(nodes, parentEl) {
  const list = document.createElement("ul");

  nodes.forEach((node) => {
    const item = document.createElement("li");

    if (node.type === "folder") {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "node folder";
      btn.innerHTML = `<span class="icon">${expanded.has(node.name) ? "📂" : "📁"}</span><span>${escapeHtml(node.name)}</span>`;
      btn.addEventListener("click", () => {
        const childContainer = item.querySelector(".children");
        if (!childContainer) return;
        const isHidden = childContainer.classList.contains("hidden");
        if (isHidden) {
          childContainer.classList.remove("hidden");
          expanded.add(node.name);
          btn.innerHTML = `<span class="icon">📂</span><span>${escapeHtml(node.name)}</span>`;
        } else {
          childContainer.classList.add("hidden");
          expanded.delete(node.name);
          btn.innerHTML = `<span class="icon">📁</span><span>${escapeHtml(node.name)}</span>`;
        }
      });

      item.appendChild(btn);

      if (node.children && node.children.length) {
        const childrenWrap = document.createElement("div");
        childrenWrap.className = "children";
        if (!expanded.has(node.name)) childrenWrap.classList.add("hidden");
        const childTree = document.createElement("div");
        renderTree(node.children, childTree);
        childrenWrap.appendChild(childTree);
        item.appendChild(childrenWrap);
      }
    } else {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "node file";
      btn.innerHTML = `<span class="icon">${getFileIcon(node.name)}</span><span>${escapeHtml(node.name)}</span>`;
      btn.addEventListener("click", () => openFile(node.path));
      item.appendChild(btn);
    }

    list.appendChild(item);
  });

  parentEl.appendChild(list);
}

function openFile(path) {
  const safePath = path.replace(/\\/g, "/");
  const lower = safePath.toLowerCase();
  const fileUrl = "./" + safePath;

  openFileLink.href = fileUrl;
  openFileLink.textContent = "Open file";

  if (lower.endsWith(".pdf")) {
    emptyState.style.display = "none";
    pdfFrame.style.display = "block";
    pdfFrame.src = fileUrl + "#toolbar=0&navpanes=0&scrollbar=0";
  } else {
    pdfFrame.style.display = "none";
    emptyState.style.display = "flex";
    emptyState.innerHTML = `
      <div>
        <p>Selected: ${escapeHtml(safePath)}</p>
        <p>Open this file in a new tab to browse or download it.</p>
      </div>
    `;
  }
}

function filterTree(query) {
  const q = query.trim().toLowerCase();
  const nodes = treeEl.querySelectorAll(".node");
  nodes.forEach((node) => {
    const label = node.textContent.toLowerCase();
    const parent = node.closest("li");
    if (!q || label.includes(q)) {
      parent.style.display = "";
    } else {
      parent.style.display = "none";
    }
  });
}

async function init() {
  const res = await fetch("./files.json");
  if (!res.ok) throw new Error("files.json not found");
  treeData = await res.json();
  treeEl.innerHTML = "";
  renderTree(treeData.children || [], treeEl);

  searchInput.addEventListener("input", (e) => {
    filterTree(e.target.value);
  });
}

init().catch((err) => {
  treeEl.innerHTML = `<p style="padding: 16px; color: #f8d7da;">Could not load files.json: ${escapeHtml(err.message)}</p>`;
});