// Product Data - Make sure your image names match the files in 'images' folder
const products = [
    { name: "AXLE HOUSING", image: "images/axle_housing.png" },
    { name: "BANJO", image: "images/banjo.png" },
    { name: "IDLER", image: "images/idler.png" },
    { name: "SUPPORT STRUCTURE", image: "images/support.png" },
    { name: "SWIVEL PIN LH", image: "images/swivel_pin.png" },
    { name: "WHEEL HUB", image: "images/wheel_hub.png" },
    { name: "VALVE BODY", image: "images/valve_body.png" }
];

const gallery = document.getElementById("gallery");

function displayProducts(list) {
    if (!gallery) return;
    
    gallery.innerHTML = list.map(p => `
        <div class="card">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x250/111/eee?text=IMAGE+NEEDED'">
            <h3>${p.name}</h3>
        </div>
    `).join('');
}

function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});
