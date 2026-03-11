const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const products = [
  { name: "AXLE HOUSING ", image: "images/AXLE HOUSING.png", category: "PTCL"   },

  { name: "BANJO", image: "images/Banjo.png", category: "PTCL"   },
   { name: "IDLER", image: "images/Idler.png", category: "PTCL"   },
   { name: "PIVOT -RH", image: "images/Pivot RH.png", category: "PTCL"   },
   { name: "SUPPORT 4544550", image: "images/Support - 4544550.png", category: "PTCL"   },
   { name: "SUPPORT 2432461/62", image: "images/Support 2432461 & 62.png", category: "PTCL"   },
   { name: "SWIVEL PIN LH", image: "images/Swivel Pin LH.png", category: "PTCL"   },
   { name: "WHEEL FRONT", image: "images/Wheel Front-1.png", category: "PTCL"   },  
     { name: "TOOTH POINT", image: "images/OEM ADAPTER.png", category: "PTCL"   }, 
     { name: "OEM ADAPTER", image: "images/OEM TOOTH POINT.png", category: "PTCL"   }, 
     { name: "OEM TOOTH POINT", image: "images/TOOTH POINT.png", category: "PTCL"   }, 

 ];

function displayProducts(productList) {
  gallery.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
    `;
    gallery.appendChild(div);
  });
}

function filterProducts() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(searchQuery);
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchName && matchCategory;
  });

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Initial load
displayProducts(products);

displayProducts(products);
