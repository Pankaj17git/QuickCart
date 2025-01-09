import {getProducts } from "../../data/product.js";
import { cart, removeFromCart, updateCart, updateDeliveryOption } from "../../data/cart.js";
import { deliveryOptions, claculateDeliveryDate } from "../../data/deliveryDate.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formatCurrencyRupees } from "../utils/money.js";
import { renderPaymentSummary } from "./payment.js";

export function renderOrders() {
  let checkoutHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProducts(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });

    const dateString = claculateDeliveryDate(deliveryOption)

    checkoutHTML += `
      <div class="cart-item-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="order-delivery-date">Delivery date: ${dateString}</div>

        <div class="product-detail-container">
          <img class="product-image" src="${matchingProduct.image}"/>

          <div class="product-detail">
            <div class="product-name js-product-name-${matchingProduct.id}">
              ${matchingProduct.name}
            </div>
            <div class="product-price js-product-price-${matchingProduct.id}">
              &#8377;${formatCurrencyRupees(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity js-product-quantity-${matchingProduct.id}">
              <span>
              Quantity: 
              <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
              Update
              </span>
              <input class="quantity-input js-quantity-input-${matchingProduct.id}" />
              <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionHTML (matchingProduct, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption)=> {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');

      const dateString = deliveryDate.format('dddd,MMMM D');

      const priceString = deliveryOption.priceCents === 0
      ? "Free"
      : `&#8377;${formatCurrencyRupees(deliveryOption.priceCents)} -`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option 
        js-delivery-option-${matchingProduct.id}-${deliveryOption.id}
        js-delivery-option" 
        data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
          <input type="radio" ${isChecked ? 'checked' : ''}
          class="delivery-option-input js-delivery-option-inptu-${matchingProduct.id}-${deliveryOption.id}" name="${matchingProduct.id}">
          <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString}</div>
          </div>
        </div>
      `;
    });

    return html;
  }

  document.querySelector(".js-checkout-order-container")
  .innerHTML = checkoutHTML;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      renderPaymentSummary();
      renderOrders();
    });
  });

  document.querySelectorAll('.js-update-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      const productConteiner = document.querySelector(`.js-cart-item-container-${productId}`);

      productConteiner.classList.add('is-editing-quantity');
    });
  });

  document.querySelectorAll('.js-save-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      const productConteiner = document.querySelector(`.js-cart-item-container-${productId}`);
      productConteiner.classList.remove('is-editing-quantity');

      const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
      const newQuantity = Number(quantityInput.value);

      updateCart(productId,newQuantity)

      const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
      quantityLabel.innerHTML = newQuantity;
      renderPaymentSummary();
    });
  });

  document.querySelectorAll('.js-delivery-option')
  .forEach((element) => {
    element.addEventListener('click', () => {
      const {productId , deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId,deliveryOptionId);

      renderOrders();
      renderPaymentSummary();
    })
  })
}
