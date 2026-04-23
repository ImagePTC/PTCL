const products = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png" },
    { name: "BANJO", image: "images/Banjo.png" },
    { name: "IDLER", image: "images/Idler.png" },
    { name: "PIVOT -RH", image: "images/Pivot RH.png" },
    { name: "SUPPORT 4544550", image: "images/Support - 4544550.png" },
    { name: "WHEEL HUB 31048", image: "images/WHEEL HUB CASTING 31048.png" },
    { name: "10-600 GV BW Body", image: "images/10-600 gv bw body ALL.png" }
];

const gallery = document.getElementById("gallery");

function displayProducts(list) {
    if (!gallery) return;
    
    gallery.innerHTML = list.map(p => `
        <div class="card">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300?text=Industrial+Part'">
            <h3>${p.name}</h3>
        </div>
    `).join('');
}

function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
}

// Ensure products load correctly
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});
