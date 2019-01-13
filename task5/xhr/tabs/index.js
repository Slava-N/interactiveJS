'use strict';

const urlLine = 'components/email-tab.html';
const tabButtons = document.querySelectorAll('.tabs a');
let contentSpace = document.getElementById('content');

for (let trigger of tabButtons) {
    trigger.addEventListener('click', preventDefaultClick);
    trigger.addEventListener('click', makeActive);
    trigger.addEventListener('click', requestPage);
}

function preventDefaultClick(event) {
    event.preventDefault();
}

function makeActive() {
    for (let tab of tabButtons) {
        tab.classList.remove('active');
    }
    this.classList.add('active')
}

function requestPage() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET',
        this.href,
        true);
    xhr.send();
    xhr.addEventListener('load', onLoad)
    function onLoad() {
        contentSpace.innerHTML = xhr.responseText;
    }
}

document.addEventListener('DOMContentLoaded', init)

function init() {
    tabButtons[0].click()
}
