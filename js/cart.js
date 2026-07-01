// =============================
// ShopEase Cart JavaScript
// =============================

// Load Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");
const taxElement = document.getElementById("tax");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("grand-total");

// Display Cart
function displayCart() {

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `

        <div class="text-center py-5">

            <h3>Your Cart is Empty</h3>

            <a href="shop.html" class="btn btn-primary mt-3">

                Continue Shopping

            </a>

        </div>

        `;

        calculateTotal();

        return;
    }

    cart.forEach((product, index) => {

        cartContainer.innerHTML += `

        <div class="row cart-item align-items-center mb-4">

            <div class="col-md-2">

                <img src="${product.image}"

                class="img-fluid rounded">

            </div>

            <div class="col-md-3">

                <h5>${product.name}</h5>

                <small>${product.category}</small>

            </div>

            <div class="col-md-2">

                ₹${product.price}

            </div>

            <div class="col-md-3">

                <button class="btn btn-outline-secondary"

                onclick="decreaseQty(${index})">-</button>

                <span class="mx-3">${product.qty || 1}</span>

                <button class="btn btn-outline-secondary"

                onclick="increaseQty(${index})">+</button>

            </div>

            <div class="col-md-2">

                <button class="btn btn-danger"

                onclick="removeItem(${index})">

                Remove

                </button>

            </div>

        </div>

        `;

    });

    calculateTotal();
}

// Increase Quantity
function increaseQty(index) {

    if (!cart[index].qty) {

        cart[index].qty = 1;
    }

    cart[index].qty++;

    saveCart();
}

// Decrease Quantity
function decreaseQty(index) {

    if (!cart[index].qty) {

        cart[index].qty = 1;
    }

    if (cart[index].qty > 1) {

        cart[index].qty--;

    } else {

        cart.splice(index,1);

    }

    saveCart();
}

// Remove Product
function removeItem(index){

    cart.splice(index,1);

    saveCart();

}

// Save Cart
function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

// Calculate Total
function calculateTotal(){

    let subtotal = 0;

    cart.forEach(product=>{

        subtotal += product.price * (product.qty || 1);

    });

    const shipping = subtotal>0 ? 99 : 0;

    const tax = subtotal * 0.18;

    const total = subtotal + shipping + tax;

    if(subtotalElement){

        subtotalElement.innerHTML = "₹" + subtotal.toFixed(2);

        taxElement.innerHTML = "₹" + tax.toFixed(2);

        shippingElement.innerHTML = "₹" + shipping.toFixed(2);

        totalElement.innerHTML = "₹" + total.toFixed(2);

    }

}

// Clear Cart
function clearCart(){

    if(confirm("Are you sure?")){

        cart=[];

        saveCart();

    }

}

// Checkout
function checkout(){

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    window.location.href="checkout.html";

}

// Apply Coupon
function applyCoupon(){

    const code=document.getElementById("coupon").value;

    if(code==="SAVE10"){

        alert("Coupon Applied! 10% Discount");

    }

    else{

        alert("Invalid Coupon");

    }

}

// Update Cart Counter
function updateCartCount(){

    const count=document.getElementById("cart-count");

    if(count){

        count.innerHTML=cart.length;

    }

}

// Initialize
displayCart();

updateCartCount();