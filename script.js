const products = [
    { name: "AXLE HOUSING", image: "images/AXLE HOUSING.png", cat: "PTCL" },
    { name: "BANJO", image: "images/Banjo.png", cat: "PTCL" },
    { name: "WHEEL HUB", image: "images/WHEEL HUB CASTING 31048.png", cat: "Castings" },
    { name: "10-600 GV Body", image: "images/10-600 gv bw body ALL.png", cat: "Castings" },
    { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png", cat: "PTCL" },
    { name: "SUPPORT", image: "images/Support - 4544550.png", cat: "PTCL" }
];

const gallery = document.getElementById("gallery");

function displayProducts(list) {
    gallery.innerHTML = list.map(p => `
        <div class="card">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x300/222/fff?text=IMAGE'">
            <h3>${p.name}</h3>
        </div>
    `).join('');

    // GSAP Entrance Animation
    gsap.from(".card", {
        opacity: 0,
        x: 100,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out"
    });
}

function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cat = document.getElementById("categoryFilter").value;
    
    const filtered = products.filter(p => {
        return (cat === "All" || p.cat === cat) && 
               p.name.toLowerCase().includes(query);
    });
    displayProducts(filtered);
}

// Enable Horizontal Scrolling with Mouse Wheel
const scrollContainer = document.querySelector(".slider-wrapper");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

window.onload = () => displayProducts(products);
