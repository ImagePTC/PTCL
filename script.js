const products = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png", desc: "INDUSTRIAL GRADE" },
    { name: "BANJO", image: "images/Banjo.png", desc: "PRECISION CASTING" },
    { name: "WHEEL HUB", image: "images/WHEEL HUB CASTING 31048.png", desc: "HEAVY DUTY" },
    { name: "VALVE BODY", image: "images/3-150 GV BW Body.png", desc: "FLOW CONTROL" },
    { name: "SUPPORT", image: "images/Support - 4544550.png", desc: "STRUCTURAL" }
];

const gallery = document.getElementById("gallery");
const cursor = document.querySelector(".cursor");

// Custom Cursor
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Display
function displayItems(list) {
    gallery.innerHTML = list.map(p => `
        <div class="item">
            <div class="item-img-wrap">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="item-info">
                <h2>${p.name}</h2>
                <p>${p.desc}</p>
            </div>
        </div>
    `).join('');
}

// Mouse Scroll to Horizontal
window.addEventListener("wheel", (e) => {
    gallery.scrollLeft += e.deltaY;
});

displayItems(products);
