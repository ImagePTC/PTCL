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
const slider = document.querySelector(".slider-section");
let autoScrollInterval;
let isPaused = false;

function renderGallery(items) {
    if(!productGrid) return;
    productGrid.innerHTML = items.map(item => `
        <div class="p-card">
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.src='https://via.placeholder.com/300x200/222/fff?text=Check+Image+Path'">
            </div>
            <h3>${item.name}</h3>
        </div>
    `).join('');
}

function startAutoScroll() {
    // Purana interval clear karein agar koi chal raha ho
    clearInterval(autoScrollInterval);
    
    autoScrollInterval = setInterval(() => {
        if (!isPaused) {
            slider.scrollLeft += 1; // Smooth speed
            
            // Loop Back: Agar end tak pahuche toh shuru se start karein
            if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
                slider.scrollLeft = 0;
            }
        }
    }, 20); 
}

// Interaction Controls
slider.addEventListener("wheel", (e) => {
    isPaused = true;
    slider.scrollLeft += e.deltaY;
    
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => { isPaused = false; }, 3000);
});

slider.addEventListener("mouseenter", () => { isPaused = true; });
slider.addEventListener("mouseleave", () => { isPaused = false; });
slider.addEventListener("touchstart", () => { isPaused = true; });

window.onload = () => {
    renderGallery(inventory);
    startAutoScroll();
};

function filterItems() {
    const s = document.getElementById("searchBar").value.toLowerCase();
    const filtered = inventory.filter(p => p.name.toLowerCase().includes(s));
    renderGallery(filtered);
    // Reset scroll position after filter
    slider.scrollLeft = 0;
}
