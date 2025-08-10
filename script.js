let cart = [];

async function loadProducts() {
  const res = await fetch('products.json');
  const products = await res.json();
  const shop = document.querySelector('.products');
  shop.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.image}" alt="${p.name}"/>
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  document.getElementById('cart-count').textContent = cart.length;
  alert(`${name} added to cart!`);
}

// Placeholder checkout
function checkout() {
  alert("Checkout coming soon!");
}

document.addEventListener('DOMContentLoaded', loadProducts);