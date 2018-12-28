'use strict';

const allGoods = document.getElementsByTagName('a')
const focusedItem = document.getElementsByClassName('gallery-view')[0]


function enlargeImg (event) {
    event.preventDefault();
    let targetImg = event.currentTarget.href;
    focusedItem.src = targetImg;
}

function markTags (event) {
    if (event.currentTarget.classList.contains('gallery-current')) {
        return;
    }

    for (const btns of allGoods) {
        btns.classList.remove('gallery-current');
    }

    event.currentTarget.classList.add('gallery-current');
}

for (const good of allGoods) {
    good.addEventListener('click', enlargeImg);
    good.addEventListener('click', markTags);
}

