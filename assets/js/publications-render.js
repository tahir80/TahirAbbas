/* ============================================================
   Renders PUBLICATIONS (see publications-data.js) into cards.
   Used by publications.html (full list + filters) and
   index.html (recent highlights, no filters).
   ============================================================ */

const TYPE_LABELS = {
  journal: "Journal",
  conference: "Conference",
  workshop: "Workshop",
  preprint: "Preprint",
  software: "Software",
  thesis: "Thesis"
};

function boldSelf(authors) {
  return authors.replace(/Tahir Abbas/g, "<strong>Tahir Abbas</strong>");
}

function pubCardHTML(p) {
  const thumb = p.thumb || "assets/img/pubs/placeholder.svg";
  const typeTag = `<span class="tag tag-${p.type}">${TYPE_LABELS[p.type] || p.type}</span>`;
  const awardTag = p.award ? `<span class="tag tag-award">${p.award}</span>` : "";
  const links = [];
  if (p.url) links.push(`<a href="${p.url}" target="_blank" rel="noopener">Paper &rarr;</a>`);
  if (p.pdf) links.push(`<a href="${p.pdf}" target="_blank" rel="noopener">PDF &rarr;</a>`);
  const linksHTML = links.length
    ? `<div class="pub-links">${links.join("")}</div>`
    : `<div class="pub-links"><span class="disabled">Link coming soon</span></div>`;

  return `
    <article class="pub-card" data-type="${p.type}">
      <img class="pub-thumb" src="${thumb}" alt="" loading="lazy">
      <div class="pub-body">
        <div class="pub-tags">${typeTag}${awardTag}</div>
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-meta">${boldSelf(p.authors)} &middot; ${p.venue} &middot; ${p.year}</p>
        ${linksHTML}
      </div>
    </article>`;
}

function renderPublications(containerId, options = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const sorted = [...PUBLICATIONS].sort((a, b) => b.year - a.year);
  const list = options.limit ? sorted.slice(0, options.limit) : sorted;

  el.innerHTML = list.map(pubCardHTML).join("");
}

function initFilterBar(barId, containerId) {
  const bar = document.getElementById(barId);
  const container = document.getElementById(containerId);
  if (!bar || !container) return;

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.dataset.type;
    container.querySelectorAll(".pub-card").forEach((card) => {
      card.style.display = type === "all" || card.dataset.type === type ? "" : "none";
    });
  });
}
