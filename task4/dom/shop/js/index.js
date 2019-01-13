'use strict';

const itemsSpace = document.getElementById('container');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('cart-total-price');
let totalSum = 0;

function buttonClick() {
    if (event.target.classList.contains('add')) {
        let currClick = event.target;
        let addedSum = Number(currClick.dataset.price);
        totalSum = totalSum + addedSum;
        cartCount.innerHTML ++;
        totalPrice.innerHTML = getPriceFormatted(totalSum);
    }
}
itemsSpace.addEventListener('click', buttonClick)
