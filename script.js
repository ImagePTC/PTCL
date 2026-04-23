const inventory = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png", category: "PTCL" },
    { name: "BANJO", image: "images/Banjo.png", category: "PTCL" },
    { name: "WHEEL HUB", image: "images/WHEEL HUB CASTING 31048.png", category: "Castings" },
    { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png", category: "PTCL" },
    { name: "IDLER", image: "images/Idler.png", category: "PTCL" }
];

const productGrid = document.getElementById("productGrid");

function renderGallery(items) {
    productGrid.innerHTML = items.map(item => `
        <div class="p-card">
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200/111/fff?text=No+Image'">
            </div>
            <h3>${item.name}</h3>
        </div>
    `).join('');
}

function filterItems() {
    const s = document.getElementById("searchBar").value.toLowerCase();
    const c = document.getElementById("catDropdown").value;
    const filtered = inventory.filter(p => {
        return p.name.toLowerCase().includes(s) && (c === "All" || p.category === c);
    });
    renderGallery(filtered);
}

// Mouse wheel se slide enable karne ke liye
const slider = document.querySelector(".slider-section");
slider.addEventListener("wheel", (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
});

window.onload = () => renderGallery(inventory);
