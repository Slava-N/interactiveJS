'use strict';

const imgBase = ['i/airmax.png', 'i/airmax-jump.png', 'i/airmax-on-foot.png',
'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/spinner.gif']


let imgCounter = 0;

const currentFocus = document.getElementById('slider')

currentFocus.src = imgBase[imgCounter];

function slide() {
    currentFocus.src = imgBase[imgCounter];
    imgCounter === ( imgBase.length - 1 - 1 ) ? imgCounter = 0 : imgCounter++;

}

setInterval(slide, 5000);