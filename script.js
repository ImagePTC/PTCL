const products = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png" },
    { name: "BANJO", image: "images/Banjo.png" },
    { name: "IDLER", image: "images/Idler.png" },
    { name: "SUPPORT 4544550", image: "images/Support - 4544550.png" },
    { name: "10-600 GV BW Body", image: "images/10-600 gv bw body ALL.png" },
    { name: "WHEEL HUB 31048", image: "images/WHEEL HUB CASTING 31048.png" }
];

function displayProducts(list) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = list.map(p => `
        <div class="product-card" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.3">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
        </div>
    `).join('');

    // Re-initialize Tilt on new elements
    VanillaTilt.init(document.querySelectorAll(".product-card"));
}

function filterProducts() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(q));
    displayProducts(filtered);
}

// Custom reveal animation on load
window.onload = () => {
    displayProducts(products);
};
