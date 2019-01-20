
'use strict';

const imgNames = ['i/breuer-building.jpg','i/guggenheim-museum.jpg','i/headquarters.jpg',
    'i/new-museum.jpg','i/IAC.jpg','i/spinner.gif'];

const currentPhoto = document.getElementById('currentPhoto');
let imgCounter = 0;
currentPhoto.src = imgNames[imgCounter];

const prevPhoto = document.getElementById('prevPhoto');
const nextPhoto = document.getElementById('nextPhoto')



function slideRight() {

    imgCounter === (imgNames.length - 1 - 1) ? imgCounter = 0 : imgCounter++;
    currentPhoto.src = imgNames[imgCounter];

}


function slideLeft() {
    imgCounter === 0 ? imgCounter = (imgNames.length - 1 - 1) : imgCounter--;
    currentPhoto.src = imgNames[imgCounter];
    
}


prevPhoto.onclick = slideLeft;
nextPhoto.onclick = slideRight;

