import { cart } from "./cart.js";
import { getProducts} from "./product.js";
import { getDeliveryOption,deliveryOptions, claculateDeliveryDate } from "./deliveryDate.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {formatCurrencyRupees } from "../script/utils/money.js";

export let orders = JSON.parse(localStorage.getItem('orders')) || [];
console.log(orders);

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function addToOrders() {
  const order = {
    orderId: getOrderId(),
    orderTime: getOrderPlacementDate(),
    totalCost: totalOrderCost(),
    products: cart.map(item => {
      const productId = item.productId;
      const matchingProduct = getProducts(productId);

      const deliveryOptionId = item.deliveryOptionId;
      
      let deliveryOption;
  
      deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
          deliveryOption = option;
        }
      });
  
      const dateString = claculateDeliveryDate(deliveryOption)
      return {
       name: matchingProduct.name,
       image: matchingProduct.image,
       quantity: item.quantity,
       deliveryDate: dateString
      }
    })
  };
  
  orders.push(order)
  saveToStorage();
  
  console.log(orders);
  
}

export function getOrderPlacementDate (){
  const today = dayjs();
  const orderDate = today.format('MMMM D');

  return orderDate;
}

export function getOrderId (){
  const uniqueId = crypto.randomUUID();

  return uniqueId;
}




export function totalOrderCost() {
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProducts(cartItem.productId);
    productPrice += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem. deliveryOptionId);
    shippingPrice += deliveryOption.priceCents;
  });

  const totalBeforeTax = productPrice + shippingPrice;
  const tax = totalBeforeTax * 0.05;
  const total = totalBeforeTax + tax;

  return formatCurrencyRupees(total);
}


