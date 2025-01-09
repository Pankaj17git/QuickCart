import { renderHeader } from "./header.js";
import { renderOrders } from "./checkout/checkout-orders.js";
import { renderPaymentSummary } from "./checkout/payment.js";

renderPaymentSummary();
renderOrders();
renderHeader();