'use strict'


function highlightNumber(connectionOption, number) {

    const numberChoosen = Math.round(+number) % 11;
    let numbers = document.getElementsByClassName(connectionOption)[0].children;
    
    Array.from(numbers).forEach(elem => elem.classList.remove('flip-it'));
    numbers[numberChoosen].classList.add('flip-it');
}