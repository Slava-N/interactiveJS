'use strict';



function newItem(event) {
    let newItem = {
        title: event.target.dataset.title,
        price: event.target.dataset.price
    };
    

    if (event.target.classList.contains('add-to-cart')) {
        addToCart(newItem)
    }
}

let itemsList = document.querySelector('.items-list');

itemsList.addEventListener('click', newItem);

