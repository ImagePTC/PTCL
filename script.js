const products = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png", category: "PTCL" },
    { name: "BANJO", image: "images/Banjo.png", category: "PTCL" },
    { name: "IDLER", image: "images/Idler.png", category: "PTCL" },
    { name: "PIVOT -RH", image: "images/Pivot RH.png", category: "PTCL" },
    { name: "SUPPORT 4544550", image: "images/Support - 4544550.png", category: "PTCL" },
    { name: "SUPPORT 2432461/62", image: "images/Support 2432461 & 62.png", category: "PTCL" },
    { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png", category: "PTCL" },
    { name: "WHEEL FRONT", image: "images/Wheel Front-1.png", category: "PTCL" },
    { name: "TOOTH POINT", image: "images/OEM ADAPTER.png", category: "PTCL" },
    { name: "3-150 GV BW Body", image: "images/3-150 GV BW Body.png", category: "PTCL" },
    { name: "10-600 GV BW Body", image: "images/10-600 gv bw body ALL.png", category: "PTCL" },
    { name: "Cover", image: "images/All Cover.png", category: "PTCL" }
];

const gallery = document.getElementById("gallery");

function displayProducts(list) {
    gallery.innerHTML = list.map(product => `
        <div class="product">
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <p>${product.name}</p>
        </div>
    `).join('');
}

function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;

    const filtered = products.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(query);
        const matchesCategory = category === "All" || p.category === category;
        return matchesQuery && matchesCategory;
    });

    displayProducts(filtered);
}

// Reveal animation on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.product');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

window.onload = () => displayProducts(products);
