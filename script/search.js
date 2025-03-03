// import { renderHeader } from "./header.js";
// import { products } from "../data/product.js";
// import { formatCurrencyRupees } from "./utils/money.js";
// renderHeader();

// document.addEventListener("DOMContentLoaded", () => {
//   const productList = document.getElementById("productList");
//   // console.log(productList);
  
//   if (!productList) {
//     console.log("Error");
//   } 
//   console.log("DOM loaded");
// })


// function  displayProducts(filteredProducts) {
//   const productList = document.getElementById("productList");

//   if (!productList) {
//     console.log("Error");
//   }
//   console.log(productList);
  
//   productList.innerHTML = "";
//   filteredProducts.forEach(product => {
//     const productDiv = document.createElement("div");
//     productList.innerHTML = `
//     <div class="product-container">
//       <div class="product-image-container">
//       <img
//       src="${product.image}"
//       class="product-image"
//         />
//         </div>
        
//         <div class="product-name limit-text-to-2-lines">
//         ${product.name}
//         </div>
        
//         <div class="product-rating-container">
//         <img
//         src="images/ratings/rating-${product.rating.stars*10}.png"
//         class="product-rating-stars"
//         />
//         <div class="product-rating-count">
//           ${product.rating.count}
//         </div>
//       </div>

//       <div class="product-price">&#8377;${formatCurrencyRupees(product.priceCents)}</div>
      
//       <div class="product-quantity-container">
//         <select class="selection" data-product-id="${product.id}">
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//           <option value="9">9</option>
//           <option value="10">10</option>
//         </select>
//         </div>
          
//           <div class="product-spacer"></div>
          
//           <div class="added-to-cart  js-added-to-cart">
//           <img src="images/icons/checkmark.png" />
//           Added
//           </div>
          
//           <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id}>
//           Add to Cart
//           </button>
//       </div>
//     `;
      
//     productList.appendChild(productDiv);
//   });
// }

// export function searchedProduct(){
//   let input = document.getElementById("searchBar").value.toLowerCase();
//   const filteredProducts = products.filter(product => 
//     product.name.toLowerCase().includes(input)
//   );

//   if (input === "") return;
//   console.log(filteredProducts);
//     displayProducts(filteredProducts);

// }





