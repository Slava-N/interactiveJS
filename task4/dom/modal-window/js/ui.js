'use strict';
// Инициализация функционала модального окна

function init() {

    function initModalUi() {
        item.classList.toggle('open');
    };
    
    const trigger = document.getElementsByClassName('btn trigger')[0];
    const item =  document.querySelector('.modal-wrapper');
    const triggerClose = document.getElementsByClassName("btn-close trigger")[0]
    trigger.addEventListener('click', initModalUi);
    triggerClose.addEventListener('click', initModalUi);
}

document.addEventListener('DOMContentLoaded', init)

