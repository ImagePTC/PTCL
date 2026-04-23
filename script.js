const products = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png", category: "PTCL" },
    { name: "BANJO", image: "images/Banjo.png", category: "PTCL" },
    { name: "IDLER", image: "images/Idler.png", category: "PTCL" },
    { name: "PIVOT -RH", image: "images/Pivot RH.png", category: "PTCL" },
    { name: "SUPPORT 4544550", image: "images/Support - 4544550.png", category: "PTCL" },
    { name: "SUPPORT 2432461/62", image: "images/Support 2432461 & 62.png", category: "PTCL" },
    { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png", category: "PTCL" },
    { name: "WHEEL FRONT", image: "images/Wheel Front-1.png", category: "PTCL" },
    { name: "3-150 GV BW Body", image: "images/3-150 GV BW Body.png", category: "PTCL" },
    { name: "10-600 GV BW Body", image: "images/10-600 gv bw body ALL.png", category: "PTCL" },
    { name: "Cover", image: "images/All Cover.png", category: "PTCL" }
    // ... baki items bhi yahan add kar sakte hain
];

function displayProducts(list) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = list.map(p => `
        <div class="product">
            <img src="${p.image}" alt="${p.name}">
            <p>${p.name}</p>
        </div>
    `).join('');
}

function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cat = document.getElementById("categoryFilter").value;
    
    const filtered = products.filter(p => {
        return (cat === "All" || p.category === cat) && 
               p.name.toLowerCase().includes(query);
    });
    displayProducts(filtered);
}

// Initial Load
window.onload = () => displayProducts(products);
