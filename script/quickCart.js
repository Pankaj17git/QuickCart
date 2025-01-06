import { renderHeader } from "./header.js";

renderHeader();

document.getElementById("add-to-cart").addEventListener("click",  () => {
    const addedTOCart = document.getElementById("added-to-cart");
    addedTOCart.style.opacity = 1;
});