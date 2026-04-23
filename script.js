:root {
    --bg-color: #0a0a0a;
    --text-color: #ffffff;
    --accent: #f5f5f7; /* Apple/Squarespace style white-grey */
    --transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

* {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

body {
    margin: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
}

/* Background Video */
.video-background {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: -2;
}

video {
    width: 100%; height: 100%; object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Cinematic dimming */
}

/* Navbar Style */
.nav-bar {
    position: fixed;
    top: 0; width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 5%;
    z-index: 100;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
}

.logo {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 4px;
}

.nav-controls {
    display: flex;
    gap: 20px;
}

.nav-controls input, .nav-controls select {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px 20px;
    border-radius: 50px; /* Pill shape like Squarespace */
    backdrop-filter: blur(10px);
}

/* Hero Content */
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-content h1 {
    font-size: clamp(40px, 8vw, 120px);
    font-weight: 800;
    margin: 0;
    letter-spacing: -2px;
}

/* Product Grid */
.main-container {
    padding: 100px 5%;
    background-color: #fff; /* White background section for products */
    color: #000;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 60px;
}

/* Product Card - The Nike/Squarespace Look */
.product {
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
    padding-bottom: 20px;
}

.product-img-container {
    background-color: #f5f5f7; /* Light grey base for products */
    border-radius: 4px;
    padding: 50px;
    margin-bottom: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    transition: var(--transition);
}

/* Hover Effect: Image Grows and Card Elevates */
.product:hover {
    transform: translateY(-10px);
}

.product:hover img {
    transform: scale(1.1);
}

.product p {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Scroll Animation */
.scroll-indicator {
    width: 2px;
    height: 60px;
    background: white;
    margin: 40px auto;
    position: relative;
    overflow: hidden;
}

.scroll-indicator::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: var(--accent);
    animation: scrollMove 2s infinite;
}

@keyframes scrollMove {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

footer {
    padding: 50px;
    text-align: center;
    font-size: 12px;
    color: #666;
    background: #fff;
}
