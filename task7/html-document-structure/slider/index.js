'use strict';

const navMenu = document.getElementsByClassName('slider-nav')[0];

const prevBtn = navMenu.querySelector("[data-action=prev]");
const nextBtn = navMenu.querySelector("[data-action=next]");
const firstBtn = navMenu.querySelector("[data-action=first]");
const lastBtn = navMenu.querySelector("[data-action=last]");
const slides = (document.getElementsByClassName('slide'));

navMenu.addEventListener('click', changeImg);

slides[4].classList.add('slide-current');
let currentSlide = document.getElementsByClassName('slide-current')[0]


function updateControls(currentSlide) {
    if (!currentSlide.previousElementSibling) {
        prevBtn.classList.add('disabled');
        firstBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
        firstBtn.classList.remove('disabled');
        
    }

    if (!currentSlide.nextElementSibling) {
        nextBtn.classList.add('disabled');
        lastBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
        lastBtn.classList.remove('disabled');
    }
}

function changeImg(event) {
    currentSlide.classList.remove('slide-current');

    switch (event.target) {
        case prevBtn:
            if (!prevBtn.classList.contains('disabled')) {
                currentSlide = currentSlide.previousElementSibling;
            }
            break;

        case nextBtn:
            if (!nextBtn.classList.contains('disabled')) {
            currentSlide = currentSlide.nextElementSibling;
            }
            break;
            
        case lastBtn:
            if (!lastBtn.classList.contains('disabled')) {
                currentSlide = currentSlide.parentElement.lastElementChild;
            }
            break;

        case firstBtn:
            if (!firstBtn.classList.contains('disabled')) {
                currentSlide = currentSlide.parentElement.firstElementChild;
            }
            break;
    }
    console.log();
    currentSlide.classList.add('slide-current');
    updateControls(currentSlide);
}

