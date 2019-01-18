'use strict';

const finalMessage = document.getElementById('output');
const form = document.getElementsByClassName('contentform')[0];
const confirmBtn = document.querySelector('form > button');
const changeBtn = document.querySelector('main > button');
const message = form.getElementsByTagName('textarea')[0];
const inputs = Array.from(form.getElementsByTagName('input'));
const outputs = Array.from(finalMessage.getElementsByTagName('output'));
const fieldsetList = Array.from(form.getElementsByTagName('fieldset'));

for (let inputForm of inputs) {
    inputForm.addEventListener('input', fillValues)
}

for (let fields of fieldsetList) {
    fields.addEventListener('input', highlightConfirm);
}

function fillValues(event) {
    outputs.forEach(el => {
        if (event.currentTarget.name === el.id) {
            el.value = event.currentTarget.value;
        }
    });
}

function showForm() {
    form.classList.remove('hidden');
    finalMessage.classList.add('hidden');
}

function highlightConfirm() {
    if (inputs.every(inp => inp.value !== '')) {
        confirmBtn.removeAttribute('disabled');
    } else {
        confirmBtn.setAttribute('disabled', true);
    }
}

function printFinalText(event) {
    event.preventDefault();
    form.classList.add('hidden');
    finalMessage.classList.remove('hidden');
}

confirmBtn.addEventListener('click', printFinalText);
changeBtn.addEventListener('click', showForm);
message.addEventListener('input', fillValues);
