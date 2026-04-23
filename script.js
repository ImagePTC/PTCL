// Exact file names from your GitHub 'images' folder
const inventory = [
    { name: "10-300 SV BW Body", image: "images/10-300 SV BW Body.png", category: "Castings" },
    { name: "10-600 GV BONNET", image: "images/10-600 GV BONNET.png", category: "Castings" },
    { name: "10-600 GV Wedge", image: "images/10-600 GV Wedge.png", category: "Castings" },
    { name: "10-600 GV Yoke", image: "images/10-600 GV Yoke.png", category: "Castings" },
    { name: "10-600 GV BW Body ALL", image: "images/10-600 gv bw body ALL.png", category: "Castings" },
    { name: "16-400 RV BW Body", image: "images/16-400 RV BW Body.png", category: "Castings" },
    { name: "3-150 GV BW Body", image: "images/3-150 GV BW Body.png", category: "Castings" }
];

const productGrid = document.getElementById("productGrid");

function renderGallery(items) {
    if (!productGrid) return;
    productGrid.innerHTML = items.map(item => `
        <div class="p-card">
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200/111/fff?text=Check+File+Name'">
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

// Mouse wheel horizontal scroll
const slider = document.querySelector(".slider-section");
if(slider) {
    slider.addEventListener("wheel", (e) => {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
    });
}

window.onload = () => renderGallery(inventory);
