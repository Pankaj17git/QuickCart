import { renderHeader } from "./header.js";
import {products} from "../data/product.js"
import { addToCart } from "../data/cart.js";
import { formatCurrencyRupees } from "./utils/money.js";
renderHeader();

let quickCartHTML = "";

products.forEach(product => {
  quickCartHTML +=`
    <div class="product-container">
      <div class="product-image-container">
        <img
          src="${product.image}"
          class="product-image"
        />
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img
          src="images/ratings/rating-${product.rating.stars*10}.png"
          class="product-rating-stars"
        />
        <div class="product-rating-count">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">&#8377;${formatCurrencyRupees(product.priceCents)}</div>

      <div class="product-quantity-container">
        <select class="selection" data-product-id="${product.id}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart  js-added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id}>
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid')
.innerHTML = quickCartHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const container = button.closest('.product-container')
    const quantitySelector = container.querySelector('.selection');
    const selectedQuantity = parseInt(quantitySelector.value); 

    const added = container.querySelector('.js-added-to-cart')

    added.style.opacity = '1';
    added.style.transition= "0.5s ease-in-out";
    setTimeout(()=> {
    added.style.opacity = '';
    added.style.transition= "0.5s ease-in-out";
    },2000)

    addToCart(productId, selectedQuantity);
  });
});



document.addEventListener("DOMContentLoaded", () => {
});


function  displayProducts(filteredProducts) {
  const productList = document.getElementById("productList");
  
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    const productDiv = document.createElement("div");
    productList.innerHTML = `
    <div class="product-container">
      <div class="product-image-container">
      <img
      src="${product.image}"
      class="product-image"
        />
        </div>
        
        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>
        
        <div class="product-rating-container">
        <img
        src="images/ratings/rating-${product.rating.stars*10}.png"
        class="product-rating-stars"
        />
        <div class="product-rating-count">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">&#8377;${formatCurrencyRupees(product.priceCents)}</div>
      
      <div class="product-quantity-container">
        <select class="selection" data-product-id="${product.id}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        </div>
          
          <div class="product-spacer"></div>
          
          <div class="added-to-cart  js-added-to-cart">
          <img src="images/icons/checkmark.png" />
          Added
          </div>
          
          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id}>
          Add to Cart
          </button>
      </div>
    `;
      
    productList.appendChild(productDiv);
  });
}

export function searchedProduct(){
  let input = document.getElementById("searchBar").value.toLowerCase();
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(input)
  );

  if (input === "") return;

  if (filteredProducts.length === 0) {
    alert("Product does not exists!")
    return;
  }
  document.querySelector('.js-products-grid')
  .innerHTML = "";

  const search = document.getElementById("productList");

  search.style.display = "block";
  displayProducts(filteredProducts);
  
}






