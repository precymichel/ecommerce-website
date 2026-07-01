// ==========================
// ShopEase Main JavaScript
// ==========================

// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Counter
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Add Product to Cart
function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    showToast(product.name + " added to cart!");
}

// Remove Product
function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    showToast("Item removed from cart");
}

// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Search Products
const searchInput = document.querySelector('input[type="search"]');

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const title = card.querySelector("h5").textContent.toLowerCase();

            if (title.includes(keyword)) {

                card.parentElement.style.display = "block";

            } else {

                card.parentElement.style.display = "none";

            }

        });

    });

}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Dark Mode
const darkButton = document.createElement("button");

darkButton.className = "btn btn-dark position-fixed";

darkButton.style.bottom = "90px";

darkButton.style.right = "20px";

darkButton.style.zIndex = "1000";

darkButton.innerHTML = '<i class="fa-solid fa-moon"></i>';

document.body.appendChild(darkButton);

darkButton.addEventListener("click", () => {

    document.body.classList.toggle("bg-dark");

    document.body.classList.toggle("text-white");

});

// Toast Notification
function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast align-items-center text-bg-success border-0 show";

    toast.style.position = "fixed";

    toast.style.top = "20px";

    toast.style.right = "20px";

    toast.style.zIndex = "9999";

    toast.innerHTML = `

    <div class="d-flex">

        <div class="toast-body">

            ${message}

        </div>

        <button class="btn-close btn-close-white me-2 m-auto"></button>

    </div>

    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 2500);

}

// Highlight Active Navbar Link
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// Navbar Shadow on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("shadow-lg");

    } else {

        navbar.classList.remove("shadow-lg");

    }

});

// Product Hover Effect
document.addEventListener("mouseover", function (e) {

    if (e.target.closest(".product-card")) {

        e.target.closest(".product-card").classList.add("shadow");

    }

});

document.addEventListener("mouseout", function (e) {

    if (e.target.closest(".product-card")) {

        e.target.closest(".product-card").classList.remove("shadow");

    }

});

// Newsletter Subscribe
const subscribeBtn = document.querySelector(".input-group .btn");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        showToast("Thank you for subscribing!");

    });

}

// Initialize
updateCartCount();

console.log("ShopEase Loaded Successfully");