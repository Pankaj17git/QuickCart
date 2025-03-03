import { cart, calculateCartQuantity } from "../../data/cart.js";
import { getProducts } from "../../data/product.js";
import { getDeliveryOption, } from "../../data/deliveryDate.js";
import { formatCurrencyRupees } from "../utils/money.js";
import { addToOrders } from "../../data/my-orders.js";

export function renderPaymentSummary() {
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProducts(cartItem.productId);
    productPrice += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice += deliveryOption.priceCents;
  });

  const totalBeforeTax = productPrice + shippingPrice;
  const tax = totalBeforeTax * 0.05;
  const total = totalBeforeTax + tax;

  const cartQuantity = calculateCartQuantity();

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
        Order Summary
    </div>

    <div class="payment-summary-row">
    <div>Items (${cartQuantity}):</div>
    <div class="payment-summary-money">&#8377;
        ${formatCurrencyRupees(productPrice)}
    </div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money js-payment-summary-shipping">&#8377;
        ${formatCurrencyRupees(shippingPrice)}
    </div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">&#8377; 
        ${formatCurrencyRupees(totalBeforeTax)}
    </div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (5%):</div>
    <div class="payment-summary-money">&#8377;
        ${formatCurrencyRupees(tax)} 
    </div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money js-payment-summary-total">&#8377;
        ${formatCurrencyRupees(total)}
    </div>
    </div>

    <button class="place-order-button button-primary js-place-order"}>
    Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;

  document.querySelector('.js-place-order')
  .addEventListener('click', () => {
    addToOrders();

    window.location.href = 'orders.html'
  });
}