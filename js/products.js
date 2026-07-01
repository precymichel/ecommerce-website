// ===============================
// Product Data
// ===============================

const products = [

{
id:1,
name:"Men's Casual T-Shirt",
price:899,
oldPrice:1199,
category:"Fashion",
rating:4.5,
image:"https://picsum.photos/300/300?random=11"
},

{
id:2,
name:"Women's Sneakers",
price:1999,
oldPrice:2499,
category:"Fashion",
rating:4.8,
image:"https://picsum.photos/300/300?random=12"
},

{
id:3,
name:"Wireless Headphones",
price:2999,
oldPrice:3499,
category:"Accessories",
rating:4.7,
image:"https://picsum.photos/300/300?random=13"
},

{
id:4,
name:"Gaming Mouse",
price:1499,
oldPrice:1999,
category:"Accessories",
rating:4.6,
image:"https://picsum.photos/300/300?random=14"
},

{
id:5,
name:"Smart Watch",
price:4999,
oldPrice:5999,
category:"Electronics",
rating:4.9,
image:"https://picsum.photos/300/300?random=15"
},

{
id:6,
name:"Bluetooth Speaker",
price:2499,
oldPrice:2999,
category:"Electronics",
rating:4.4,
image:"https://picsum.photos/300/300?random=16"
},

{
id:7,
name:"Laptop Backpack",
price:1599,
oldPrice:1999,
category:"Accessories",
rating:4.3,
image:"https://picsum.photos/300/300?random=17"
},

{
id:8,
name:"Leather Wallet",
price:799,
oldPrice:999,
category:"Fashion",
rating:4.5,
image:"https://picsum.photos/300/300?random=18"
},

{
id:9,
name:"Running Shoes",
price:3499,
oldPrice:4299,
category:"Fashion",
rating:4.8,
image:"https://picsum.photos/300/300?random=19"
},

{
id:10,
name:"Office Laptop",
price:58999,
oldPrice:62999,
category:"Electronics",
rating:4.9,
image:"https://picsum.photos/300/300?random=20"
}

];

// ===============================
// Display Products
// ===============================

const productContainer = document.getElementById("featured-products");

if(productContainer){

products.forEach(product=>{

productContainer.innerHTML += `

<div class="col-lg-3 col-md-6 mb-4">

<div class="product-card">

<div class="product-img">

<img src="${product.image}" alt="${product.name}">

</div>

<div class="product-content">

<h5>${product.name}</h5>

<p class="rating">

⭐⭐⭐⭐⭐ (${product.rating})

</p>

<p>

<span class="price">₹${product.price}</span>

<span class="old-price">₹${product.oldPrice}</span>

</p>

<div class="product-buttons">

<button class="btn btn-warning add-cart"
onclick="addToCart(${product.id})">

<i class="fa fa-cart-plus"></i>

Add

</button>

<a href="product.html?id=${product.id}"

class="btn btn-dark">

View

</a>

</div>

</div>

</div>

</div>

`;

});

}

// ===============================
// Search Function
// ===============================

function searchProducts(keyword){

return products.filter(product=>

product.name.toLowerCase().includes(keyword.toLowerCase())

);

}

// ===============================
// Category Filter
// ===============================

function filterProducts(category){

if(category==="All") return products;

return products.filter(product=>

product.category===category

);

}

// ===============================
// Get Product By ID
// ===============================

function getProduct(id){

return products.find(product=>product.id==id);

}