const inventory = [
    { name: "10-300 SV BW Body", file: "10-300 SV BW Body.png" },
    { name: "10-600 GV BONNET", file: "10-600 GV BONNET.png" },
    { name: "10-600 GV Wedge", file: "10-600 GV Wedge.png" },
    { name: "10-600 GV Yoke", file: "10-600 GV Yoke.png" },
    { name: "10-600 GV Body ALL", file: "10-600 gv bw body ALL.png" },
    { name: "16-400 RV BW Body", file: "16-400 RV BW Body.png" },
    { name: "3-150 GV BW Body", file: "3-150 GV BW Body.png" }
];

const productGrid = document.getElementById("productGrid");
const slider = document.querySelector(".slider-section");
let autoScroll;
let isPaused = false;

function renderGallery(items) {
    if(!productGrid) return;
    productGrid.innerHTML = items.map(item => `
        <div class="p-card">
            <div class="img-container">
                <img src="images/${item.file}" alt="${item.name}" 
                     onerror="this.src='https://via.placeholder.com/300x200/222/fff?text=Check+Image+Name'">
            </div>
            <h3>${item.name}</h3>
        </div>
    `).join('');
}

// --- AUTO PLAY LOGIC ---
function startAutoScroll() {
    autoScroll = setInterval(() => {
        if (!isPaused) {
            slider.scrollLeft += 2; // Speed control (2px per frame)
            // Agar end tak pahuch jaye toh wapas shuruat mein aa jaye (Infinite Loop)
            if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
                slider.scrollLeft = 0;
            }
        }
    }, 20); // Smoothness control
}

// --- MANUAL INTERACTION CONTROLS ---

// 1. Mouse Wheel se manual scroll (Wheel chalate hi auto ruk jayega)
slider.addEventListener("wheel", (e) => {
    e.preventDefault();
    isPaused = true; // Auto-play roko
    slider.scrollLeft += e.deltaY;
    
    // 2 second baad dobara auto-play shuru karne ke liye (Optional)
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => { isPaused = false; }, 2000);
});

// 2. Mouse Hover par auto-play rokna (Taaki user image dekh sake)
slider.addEventListener("mouseenter", () => { isPaused = true; });
slider.addEventListener("mouseleave", () => { isPaused = false; });

// 3. Mobile par touch karne par rokna
slider.addEventListener("touchstart", () => { isPaused = true; });

window.onload = () => {
    renderGallery(inventory);
    startAutoScroll();
};

function filterItems() {
    const s = document.getElementById("searchBar").value.toLowerCase();
    const filtered = inventory.filter(p => p.name.toLowerCase().includes(s));
    renderGallery(filtered);
}
