const inventory = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png", category: "PTCL" },
    { name: "BANJO", image: "images/Banjo.png", category: "PTCL" },
    { name: "IDLER", image: "images/Idler.png", category: "PTCL" },
    { name: "PIVOT -RH", image: "images/Pivot RH.png", category: "PTCL" },
    { name: "SUPPORT 4544550", image: "images/Support - 4544550.png", category: "PTCL" },
    { name: "SUPPORT 2432461/62", image: "images/Support 2432461 & 62.png", category: "PTCL" },
    { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png", category: "PTCL" },
    { name: "WHEEL FRONT", image: "images/Wheel Front-1.png", category: "PTCL" },  
    { name: "TOOTH POINT", image: "images/OEM ADAPTER.png", category: "PTCL" }, 
    { name: "OEM ADAPTER", image: "images/OEM TOOTH POINT.png", category: "PTCL" }, 
    { name: "OEM TOOTH POINT", image: "images/TOOTH POINT.png", category: "PTCL" }, 
    { name: "SUPPORT 31083", image: "images/SUPPORT 31083.png", category: "PTCL" }, 
    { name: "WHEEL HUB 31048", image: "images/WHEEL HUB CASTING 31048.png", category: "PTCL" }, 
    { name: "3-150 GV BW Body", image: "images/3-150 GV BW Body.png", category: "PTCL" }, 
    { name: "3-150 GV FL Body", image: "images/3-150 GV FL Body.png", category: "PTCL" }, 
    { name: "3-150 GV Wedge", image: "images/3-150 GV Wedge.png", category: "PTCL" }, 
    { name: "3-150 GV Yoke Cum Bnt SG", image: "images/3-150 GV Yoke Cum Bnt SG.png", category: "PTCL" }, 
    { name: "3-300 SV YOKE", image: "images/3-300 SV YOKE.png", category: "PTCL" }, 
    { name: "10-300 SV BW Body", image: "images/10-300 SV BW Body.png", category: "PTCL" }, 
    { name: "10-600 GV BONNET", image: "images/10-600 GV BONNET.png", category: "PTCL" }, 
    { name: "10-600 GV BW Body", image: "images/10-600 gv bw body ALL.png", category: "PTCL" }, 
    { name: "10-600 GV Wedge", image: "images/10-600 GV Wedge.png", category: "PTCL" }, 
    { name: "10-600 GV Yoke", image: "images/10-600 GV Yoke.png", category: "PTCL" }, 
    { name: "16-400 RV BW Body", image: "images/16-400 RV BW Body.png", category: "PTCL" }, 
    { name: "18-300 FV BW Body", image: "images/18-300 FV BW Body.png", category: "PTCL" }, 
    { name: "20-300 GV Yoke", image: "images/20-300 GV Yoke.png", category: "PTCL" }, 
    { name: "Cover", image: "images/All Cover.png", category: "PTCL" }
];

const productGrid = document.getElementById("productGrid");
let isPaused = false;

function renderGallery(items) {
    if(!productGrid) return;
    productGrid.innerHTML = items.map(item => `
        <div class="p-card">
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.src='https://via.placeholder.com/200x150/ffffff/000000?text=Path+Error'">
            </div>
            <h3>${item.name}</h3>
        </div>
    `).join('');
}

// Slider Movement Logic
function moveSlider(direction) {
    const scrollAmount = 300;
    if (direction === 'left') {
        productGrid.scrollLeft -= scrollAmount;
    } else {
        productGrid.scrollLeft += scrollAmount;
    }
}

function startAutoScroll() {
    setInterval(() => {
        if (!isPaused) {
            productGrid.scrollLeft += 1;
            if (productGrid.scrollLeft >= (productGrid.scrollWidth - productGrid.clientWidth)) {
                productGrid.scrollLeft = 0;
            }
        }
    }, 30);
}

productGrid.addEventListener("mouseenter", () => isPaused = true);
productGrid.addEventListener("mouseleave", () => isPaused = false);

window.onload = () => {
    renderGallery(inventory);
    startAutoScroll();
};

function filterItems() {
    const s = document.getElementById("searchBar").value.toLowerCase();
    const filtered = inventory.filter(p => p.name.toLowerCase().includes(s));
    renderGallery(filtered);
    productGrid.scrollLeft = 0;
}
