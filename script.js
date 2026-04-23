const products = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png" },
    { name: "BANJO", image: "images/Banjo.png" },
    { name: "3-150 GV BW Body", image: "images/3-150 GV BW Body.png" },
    { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png" },
    { name: "WHEEL HUB 31048", image: "images/WHEEL HUB CASTING 31048.png" },
    { name: "10-600 GV BW Body", image: "images/10-600 gv bw body ALL.png" }
];

const gallery = document.getElementById("gallery");
const cursor = document.getElementById("cursor-custom");

// Custom Cursor Movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Product Display
function displayProducts(list) {
    gallery.innerHTML = list.map(p => `
        <div class="product" onmouseenter="growCursor()" onmouseleave="shrinkCursor()">
            <div class="product-img">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
            </div>
        </div>
    `).join('');
}

function growCursor() {
    cursor.style.transform = "scale(4)";
    cursor.style.mixBlendMode = "difference";
    cursor.innerHTML = "<span style='font-size:3px; color:black;'>VIEW</span>";
}

function shrinkCursor() {
    cursor.style.transform = "scale(1)";
    cursor.style.mixBlendMode = "normal";
    cursor.innerHTML = "";
}

function filterProducts() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(q));
    displayProducts(filtered);
}

window.onload = () => displayProducts(products);
