const fileTableBody = document.getElementById("fileTableBody");
const breadcrumbsEl = document.getElementById("breadcrumbs");
const searchInput = document.getElementById("searchInput");
const pdfFrame = document.getElementById("pdfFrame");
const markdownBody = document.getElementById("markdownBody");
const emptyState = document.getElementById("emptyState");
const contentTitle = document.getElementById("contentTitle");
const downloadWrap = document.getElementById("downloadWrap");
const downloadLink = document.getElementById("downloadLink");
const downloadFileName = document.getElementById("downloadFileName");

let treeData = null;
let breadcrumbStack = []; // array of folder nodes, root to current
const CDN_BASE_URL = "https://cdn.jsdelivr.net/gh/fsr-science/NCERT-Science@main/";

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
  return "📄";
}

function getFileType(name) {
  const dot = name.lastIndexOf(".");
  if (dot === -1) return "File";
  return name.slice(dot + 1).toUpperCase();
}

function currentNodes() {
  if (!breadcrumbStack.length) return treeData.children || [];
  return breadcrumbStack[breadcrumbStack.length - 1].children || [];
}

// ---- Breadcrumbs ----

function renderBreadcrumbs() {
  breadcrumbsEl.innerHTML = "";

  const homeBtn = document.createElement("button");
  homeBtn.type = "button";
  homeBtn.className = "fb-crumb";
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", () => goToBreadcrumb(0));
  breadcrumbsEl.appendChild(homeBtn);

  breadcrumbStack.forEach((node, i) => {
    const sep = document.createElement("span");
    sep.className = "fb-crumb-sep";
    sep.textContent = "/";
    breadcrumbsEl.appendChild(sep);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fb-crumb";
    btn.textContent = node.name;
    const targetIndex = i + 1;
    btn.addEventListener("click", () => goToBreadcrumb(targetIndex));
    breadcrumbsEl.appendChild(btn);
  });
}

function goToBreadcrumb(index) {
  breadcrumbStack = breadcrumbStack.slice(0, index);
  searchInput.value = "";
  renderBreadcrumbs();
  renderBrowseTable(currentNodes());
}

function enterFolder(node) {
  breadcrumbStack.push(node);
  searchInput.value = "";
  renderBreadcrumbs();
  renderBrowseTable(node.children || []);
}

// ---- Table rendering ----

function makeRowInteractive(tr, handler) {
  tr.tabIndex = 0;
  tr.setAttribute("role", "button");
  tr.addEventListener("click", handler);
  tr.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler();
    }
  });
}

function buildRow(node, locationLabel, onActivate) {
  const tr = document.createElement("tr");
  tr.className = "fb-row " + (node.type === "folder" ? "fb-row-folder" : "fb-row-file");
  const typeLabel = node.type === "folder" ? "Folder" : getFileType(node.name);
  const locationHtml = locationLabel ? `<div class="fb-location">${escapeHtml(locationLabel)}</div>` : "";

  tr.innerHTML = `
    <td class="fb-name-cell"><span class="icon">${node.type === "folder" ? "📁" : getFileIcon(node.name)}</span><span>${escapeHtml(node.name)}</span></td>
    <td class="fb-type-cell">${typeLabel}${locationHtml}</td>
  `;
  makeRowInteractive(tr, onActivate);
  return tr;
}

function renderBrowseTable(nodes) {
  fileTableBody.innerHTML = "";

  if (!nodes || !nodes.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="2" class="fb-empty-row">This folder is empty.</td>`;
    fileTableBody.appendChild(tr);
    return;
  }

  const sorted = [...nodes].sort((a, b) => {
    if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  sorted.forEach((node) => {
    const row = buildRow(node, null, () => {
      if (node.type === "folder") {
        enterFolder(node);
      } else {
        openFile(node);
      }
    });
    fileTableBody.appendChild(row);
  });
}

// ---- Search (flattened across the whole tree) ----

function flattenNodes(nodes, trailNodes) {
  let out = [];
  nodes.forEach((node) => {
    out.push({ node, trailNodes });
    if (node.type === "folder" && node.children && node.children.length) {
      out = out.concat(flattenNodes(node.children, trailNodes.concat(node)));
    }
  });
  return out;
}

function goToMatch(node, trailNodes) {
  searchInput.value = "";
  if (node.type === "folder") {
    breadcrumbStack = trailNodes.concat(node);
    renderBreadcrumbs();
    renderBrowseTable(node.children || []);
  } else {
    breadcrumbStack = trailNodes.slice();
    renderBreadcrumbs();
    const parentNodes = trailNodes.length ? trailNodes[trailNodes.length - 1].children : (treeData.children || []);
    renderBrowseTable(parentNodes || []);
    openFile(node);
  }
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const all = flattenNodes(treeData.children || [], []);
  const matches = all.filter(({ node }) => node.name.toLowerCase().includes(q));

  fileTableBody.innerHTML = "";

  if (!matches.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="2" class="fb-empty-row">No files match "${escapeHtml(query)}".</td>`;
    fileTableBody.appendChild(tr);
    return;
  }

  matches.forEach(({ node, trailNodes }) => {
    const location = trailNodes.length ? trailNodes.map((n) => n.name).join(" / ") : "Home";
    const row = buildRow(node, location, () => goToMatch(node, trailNodes));
    fileTableBody.appendChild(row);
  });
}

// ---- Inline viewer ----

function setViewerMode(mode) {
  pdfFrame.style.display = mode === "pdf" ? "block" : "none";
  markdownBody.style.display = mode === "markdown" ? "block" : "none";
  emptyState.style.display = mode === "fallback" ? "flex" : "none";
}

function renderMarkdown(text) {
  if (window.marked && typeof window.marked.parse === "function") {
    return window.marked.parse(text);
  }
  return `<pre class="fb-plain-md">${escapeHtml(text)}</pre>`;
}

function showDownload(url, filename) {
  downloadLink.href = url;
  downloadLink.setAttribute("download", filename);
  downloadFileName.textContent = filename;
  downloadWrap.classList.remove("hidden");
}

async function openFile(node) {
  const safePath = node.path.replace(/\\/g, "/");
  const lower = safePath.toLowerCase();
  const fileUrl = CDN_BASE_URL + safePath.split("/").map(encodeURIComponent).join("/");

  contentTitle.textContent = node.name;
  // Reveal the download link only now that a file has actually been opened.
  showDownload(fileUrl, node.name);

  if (lower.endsWith(".pdf")) {
    setViewerMode("pdf");
    pdfFrame.src = fileUrl + "#toolbar=0&navpanes=0&scrollbar=0";
  } else if (lower.endsWith(".md")) {
    setViewerMode("markdown");
    markdownBody.innerHTML = `<p class="fb-loading">Loading…</p>`;
    try {
      const res = await fetch(fileUrl);
      if (!res.ok) throw new Error(`Could not load file (${res.status})`);
      const text = await res.text();
      markdownBody.innerHTML = renderMarkdown(text);
    } catch (err) {
      markdownBody.innerHTML = `<p class="fb-error">Could not open this file inline: ${escapeHtml(err.message)}. Use the download link below instead.</p>`;
    }
  } else {
    setViewerMode("fallback");
    emptyState.innerHTML = `
      <div>
        <p>${escapeHtml(node.name)}</p>
        <p>Inline preview isn't available for this file type yet. Use the download link below to save it.</p>
      </div>
    `;
  }
}

// ---- Init ----

async function init() {
  const res = await fetch("./files.json");
  if (!res.ok) throw new Error("files.json not found");
  const text = await res.text();
  treeData = JSON.parse(text);
  // cheap signature used by the background poller
  lastManifestSignature = text.length + ':' + text.slice(0, 64);

  renderBreadcrumbs();
  renderBrowseTable(treeData.children || []);

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value;
    if (!q.trim()) {
      renderBrowseTable(currentNodes());
    } else {
      renderSearchResults(q);
    }
  });
}

init().catch((err) => {
  fileTableBody.innerHTML = `<tr><td colspan="2" class="fb-empty-row">Could not load files.json: ${escapeHtml(err.message)}</td></tr>`;
});

// ---- Background manifest poller ----
let lastManifestSignature = null;

async function checkForContentUpdate() {
  try {
    const res = await fetch(`./files.json?v=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return;
    const text = await res.text();
    const signature = text.length + ':' + text.slice(0, 64);
    if (lastManifestSignature && signature !== lastManifestSignature) {
      console.info('[refresh] Repository update detected — refreshing tree');
      try {
        treeData = JSON.parse(text);
        breadcrumbStack = [];
        renderBreadcrumbs();
        renderBrowseTable(treeData.children || []);
      } catch (e) {
        console.warn('[refresh] failed to parse updated manifest', e);
      }
    }
    lastManifestSignature = signature;
  } catch (e) {
    console.warn('[refresh] manifest check failed', e);
  }
}

// Poll every 2 minutes
setInterval(checkForContentUpdate, 120_000);