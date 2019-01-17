'use strict';

const initialCurrency = document.getElementById('from');
const targetCurrency = document.getElementById('to');
const content = document.getElementById('content');
const loader = document.getElementById('loader');
const source = document.getElementById('source');
const result = document.getElementById('result');

const xhr = new XMLHttpRequest();
xhr.open('GET',
    'https://neto-api.herokuapp.com/currency',
    true);
xhr.send();

function deleteLoad() {
    loader.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', deleteLoad);
xhr.addEventListener('load', onLoad);

function onLoad() {
    let data = JSON.parse(xhr.responseText);
    for (let i=0; i < data.length; i++) {
        let current = data[i]
        let optionTag = document.createElement('option');
        optionTag.setAttribute('value', current.value);
        optionTag.setAttribute('data-code', current.code);
        optionTag.innerText = current.code;
        // console.log(optionTag);
        let optionTag2 = optionTag.cloneNode(true);
        // console.log(optionTag2);
        initialCurrency.appendChild(optionTag);
        targetCurrency.appendChild(optionTag2);
    }
    content.classList.remove('hidden');
    loader.classList.add('hidden');
}

function fxConversion() {
    let notional = 0;
    if (initialCurrency.dataset.code == 'RUR') {
        notional = parseFloat(source.value) / parseFloat(targetCurrency.value);
    } else {
        notional = parseFloat(source.value) / (parseFloat(targetCurrency.value)) * (parseFloat(initialCurrency.value));
    }
    result.value = notional.toFixed(2);
}

initialCurrency.addEventListener('change', fxConversion);
targetCurrency.addEventListener('change', fxConversion);

// console.log(data);
source.addEventListener('input', fxConversion);