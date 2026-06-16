// ── PRODUCT DATA ─────────────────────────────────────────────
// image: path to your product image file (e.g. "images/AXLE HOUSING.png")
// Leave image as "" if you don't have the image yet
const inventory = [
    { name: "AXLE HOUSING",            image: "images/AXLE HOUSING.png",                   category: "PTCL" },
    { name: "BANJO",                   image: "images/Banjo.png",                           category: "PTCL" },
    { name: "IDLER",                   image: "images/Idler.png",                           category: "PTCL" },
    { name: "PIVOT - RH",             image: "images/Pivot RH.png",                        category: "PTCL" },
    { name: "SUPPORT 4544550",         image: "images/Support - 4544550.png",               category: "PTCL" },
    { name: "SUPPORT 2432461/62",      image: "images/Support 2432461 & 62.png",            category: "PTCL" },
    { name: "SWIVEL PIN LH",          image: "images/Swivel Pin LH.png",                   category: "PTCL" },
    { name: "WHEEL FRONT",            image: "images/Wheel Front-1.png",                   category: "PTCL" },
    { name: "TOOTH POINT",            image: "images/TOOTH POINT.png",                     category: "PTCL" },
    { name: "OEM ADAPTER",            image: "images/OEM ADAPTER.png",                     category: "PTCL" },
    { name: "OEM TOOTH POINT",        image: "images/OEM TOOTH POINT.png",                 category: "PTCL" },
    { name: "SUPPORT 31083",          image: "images/SUPPORT 31083.png",                   category: "PTCL" },
    { name: "WHEEL HUB 31048",        image: "images/WHEEL HUB CASTING 31048.png",         category: "PTCL" },
    { name: "3-150 GV BW Body",       image: "images/3-150 GV BW Body.png",                category: "PTCL" },
    { name: "3-150 GV FL Body",       image: "images/3-150 GV FL Body.png",                category: "PTCL" },
    { name: "3-150 GV Wedge",         image: "images/3-150 GV Wedge.png",                  category: "PTCL" },
    { name: "3-150 GV Yoke Cum Bnt SG", image: "images/3-150 GV Yoke Cum Bnt SG.png",     category: "PTCL" },
    { name: "3-300 SV YOKE",          image: "images/3-300 SV YOKE.png",                   category: "PTCL" },
    { name: "10-300 SV BW Body",      image: "images/10-300 SV BW Body.png",               category: "PTCL" },
    { name: "10-600 GV BONNET",       image: "images/10-600 GV BONNET.png",                category: "PTCL" },
    { name: "10-600 GV BW Body",      image: "images/10-600 gv bw body ALL.png",           category: "PTCL" },
    { name: "10-600 GV Wedge",        image: "images/10-600 GV Wedge.png",                 category: "PTCL" },
    { name: "10-600 GV Yoke",         image: "images/10-600 GV Yoke.png",                  category: "PTCL" },
    { name: "16-400 RV BW Body",      image: "images/16-400 RV BW Body.png",               category: "PTCL" },
    { name: "18-300 FV BW Body",      image: "images/18-300 FV BW Body.png",               category: "PTCL" },
    { name: "20-300 GV Yoke",         image: "images/20-300 GV Yoke.png",                  category: "PTCL" },
    { name: "COVER",                  image: "images/All Cover.png",                       category: "PTCL" },
];

// ── PLACEHOLDER ICONS (cycles through for variety) ────────────
const placeholderIcons = ["fa-gear", "fa-screwdriver-wrench", "fa-gear", "fa-cogs", "fa-screwdriver-wrench", "fa-gear"];

// ── BUILD ONE CARD ─────────────────────────────────────────────
function buildCard(item, idx) {
    const iconClass = placeholderIcons[idx % placeholderIcons.length];

    // Image inner — shows real image or placeholder icon
    const imgInner = item.image
        ? `<img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='<i class=\\"fa-solid ${iconClass} card-placeholder-icon\\"></i>'">`
        : `<i class="fa-solid ${iconClass} card-placeholder-icon"></i>`;

    return `
        <div class="p-card">
            <span class="card-watermark"><i class="fa-solid fa-gear"></i></span>
            <div class="card-img-area">${imgInner}</div>
            <div>
                <div class="card-series">${item.category} SERIES</div>
                <div class="card-name">${item.name}</div>
            </div>
        </div>`;
}

// ── RENDER MARQUEE ─────────────────────────────────────────────
const marqueeTrack = document.getElementById("marqueeTrack");
const itemCountEl  = document.getElementById("itemCount");
const noResultsEl  = document.getElementById("noResults");

function renderMarquee(items) {
    if (items.length === 0) {
        marqueeTrack.innerHTML = "";
        marqueeTrack.style.display = "none";
        noResultsEl.style.display = "block";
        itemCountEl.textContent = "0 Items";
        return;
    }

    noResultsEl.style.display = "none";
    marqueeTrack.style.display = "flex";
    itemCountEl.textContent = items.length + " Items";

    // Duplicate list for seamless infinite loop
    const doubled = [...items, ...items];
    marqueeTrack.innerHTML = doubled.map((item, idx) => buildCard(item, idx)).join("");

    // Speed: base 80s for 27 items, scale proportionally
    const duration = Math.max(30, items.length * 3);
    marqueeTrack.style.animationDuration = duration + "s";
}

// ── FILTER ─────────────────────────────────────────────────────
function filterItems() {
    const q   = document.getElementById("searchBar").value.toLowerCase().trim();
    const cat = document.getElementById("catDropdown").value;

    const filtered = inventory.filter(p => {
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat  = cat === "All" || p.category === cat;
        return matchName && matchCat;
    });

    renderMarquee(filtered);
}

// ── HOVER PAUSE ─────────────────────────────────────────────────
const marqueeMask = document.querySelector(".marquee-mask");
marqueeMask.addEventListener("mouseenter", () => marqueeTrack.classList.add("paused"));
marqueeMask.addEventListener("mouseleave", () => marqueeTrack.classList.remove("paused"));

// ── KEYBOARD SUPPORT ───────────────────────────────────────────
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("modal").classList.contains("open")) {
        closeModal();
    }
});

// ── MOUSE WHEEL HORIZONTAL SCROLL (on the mask) ────────────────
marqueeMask.addEventListener("wheel", (e) => {
    e.preventDefault();
    // Shift animation start to simulate scrolling feel
    const current = getComputedStyle(marqueeTrack).animationDelay;
    const delay = parseFloat(current) || 0;
    marqueeTrack.style.animationDelay = (delay - e.deltaY * 0.05) + "s";
}, { passive: false });

// ── MODAL ───────────────────────────────────────────────────────
function openModal(url, title) {
    const modal = document.getElementById("modal");
    const frame = document.getElementById("modalFrame");
    const titleEl = document.getElementById("modalTitle");

    frame.src = url;
    titleEl.textContent = title;
    modal.classList.add("open");
    document.body.classList.add("no-scroll");
}

function closeModal() {
    const modal = document.getElementById("modal");
    const frame = document.getElementById("modalFrame");

    modal.classList.remove("open");
    frame.src = "";
    document.body.classList.remove("no-scroll");
}

function handleModalClick(e) {
    if (e.target === document.getElementById("modal")) {
        closeModal();
    }
}

// ── FOOTER YEAR ─────────────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── INIT ────────────────────────────────────────────────────────
window.addEventListener("load", () => {
    renderMarquee(inventory);
});
