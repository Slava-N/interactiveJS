'use strict';

const itemsSpace = document.getElementById('container');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('cart-total-price');


function buttonClick() {
    if (event.target.classList.contains('add')) {
        let currClick = event.target;
        console.log(currClick)
        cartCount.innerHTML ++;
        totalPrice.innerHTML = Math.round(totalPrice.innerHTML) + Math.round(currClick.dataset.price);
    }
}
itemsSpace.addEventListener('click', buttonClick)
