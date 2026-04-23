const inventory = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png", category: "PTCL" },
    { name: "BANJO", image: "images/Banjo.png", category: "PTCL" },
    { name: "IDLER", image: "images/Idler.png", category: "PTCL" },
    { name: "WHEEL HUB 31048", image: "images/WHEEL HUB CASTING 31048.png", category: "Castings" },
    { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png", category: "PTCL" },
    { name: "10-600 GV BW BODY", image: "images/10-600 gv bw body ALL.png", category: "Castings" }
];

const productGrid = document.getElementById("productGrid");

function renderGallery(items) {
    productGrid.innerHTML = items.map(item => `
        <div class="p-card">
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300/111/fff?text=Foundry+Part'">
            </div>
            <h3>${item.name}</h3>
        </div>
    `).join('');
}

function filterItems() {
    const searchVal = document.getElementById("searchBar").value.toLowerCase();
    const catVal = document.getElementById("catDropdown").value;

    const filtered = inventory.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchVal);
        const matchCat = (catVal === "All" || p.category === catVal);
        return matchSearch && matchCat;
    });

    renderGallery(filtered);
}

// Enable Smooth Mouse Wheel Horizontal Scrolling
const scrollBox = document.querySelector(".slider-section");
scrollBox.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollBox.scrollLeft += e.deltaY;
});

// Initial Load
window.onload = () => renderGallery(inventory);
