import { addDays, format } from "https://esm.sh/date-fns@2.30.0?bundle";

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 100
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 312
}];

export function getDeliveryOption(deliveryOptionId) {

  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}



export function claculateDeliveryDate(deliveryOption) {
  const today = new Date();
  const deliveryDate = addDays(today, deliveryOption.deliveryDays);
  const dateString = format(deliveryDate, "eeee, MMMM d");
  return dateString;
}