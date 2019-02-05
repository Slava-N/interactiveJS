'use strict';

const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const counter = document.getElementById('counter');
const reset = document.getElementById('reset');

if (sessionStorage.countValue === undefined) {
    sessionStorage.countValue = 0;
}

counter.textContent = sessionStorage.countValue;
console.log(counter.textContent)

function decrementMinus() {
    sessionStorage.countValue == 0 ? sessionStorage.countValue : --sessionStorage.countValue;
    counter.textContent = sessionStorage.countValue
}

function incrementPlus() {
    counter.textContent = ++sessionStorage.countValue
}

function resetCount() {
    sessionStorage.countValue = 0;
    counter.textContent = sessionStorage.countValue;
}

increment.addEventListener('click', incrementPlus);
decrement.addEventListener('click', decrementMinus);
reset.addEventListener('click', resetCount);