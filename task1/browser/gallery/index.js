
'use strict';

const imgNames = ['i/breuer-building.jpg','i/guggenheim-museum.jpg','i/headquarters.jpg',
    'i/new-museum.jpg','i/IAC.jpg','i/spinner.gif'];

const currentPhoto = document.getElementById('currentPhoto');
let imgCounter = 0;

const prevPhoto = document.getElementById('prevPhoto');
const nextPhoto = document.getElementById('nextPhoto')

function slideRight() {
    
    currentPhoto.src = imgNames[imgCounter];
    imgCounter === 5 ? imgCounter = 0 : imgCounter++;
}


function slideLeft() {
    currentPhoto.src = imgNames[imgCounter];
    imgCounter === 0 ? imgCounter = 5 : imgCounter--;
}


prevPhoto.onclick = slideLeft;
nextPhoto.onclick = slideRight;

