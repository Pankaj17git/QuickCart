import { orders } from "../data/my-orders.js";
import {renderHeader} from "./header.js"
import { addToCart } from "../data/cart.js";

renderHeader();

export function renderOrderHistory () {
  let orderHTML = '';
  console.log(orders);
  
  orders.forEach(orderItems => { 
    orderHTML += `
      <div class="order-container">
        <div class="header">
          <div class="header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed</div>
              <div>${orderItems.orderTime}</div>
            </div>

            <div class="order-price">
              <div class="order-header-label">Total:</div>
              <div>&#8377;${orderItems.totalCost}
              </div>
            </div>
          </div>

          <div class="header-right-section">
            <div class="order-id">
              <div class="order-header-label">Order ID:</div>
              <div>${orderItems.orderId}</div>
            </div>
          </div>
        </div>

        <div class="order-detail-grid">   
          ${renderOrderItemHTML(orderItems)}
        </div>
      </div>
    `;
  });

  function renderOrderItemHTML (orderItems) {
    let html = '';
    orderItems.products.forEach(productdDetails => {
      html +=`
           
      <div>
        <img src="${productdDetails.image}" class="product-image">
      </div>
      <div class="product-detail">
        <div class="product-name">
          ${productdDetails.name}
        </div>

        <div class="arrival-time">
          Arriving on: ${productdDetails.deliveryDate}
        </div>

        <div class="quantity">
          Quantity: ${productdDetails.quantity}
        </div>

        <button class="buy-it-again js-buy-it-again button-primary" data-product-id=${productdDetails.productId}>
          <img src="images/icons/buy-again.png" class="buy-again-image">
          <span>Buy it again</span>
        </button>
      </div>

      <div class="track-package">
        <button class="track button-secondary">Track Package</button>
      </div>
      
    `;
    })
    return html; 
  }

  document.querySelector('.js-order-grid')
  .innerHTML = orderHTML;

  document.querySelectorAll('.js-buy-it-again')
  .forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const selectedQuantity = 1;

      addToCart(productId, selectedQuantity);
      
    })
  });
}

renderOrderHistory();
