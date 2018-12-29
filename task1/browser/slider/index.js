'use strict';

const imgBase = ['i/airmax.png', 'i/airmax-jump.png', 'i/airmax-on-foot.png',
'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/spinner.gif']


let imgCounter = 0;

const currentFocus = document.getElementById('slider')

function slide() {
    currentFocus.src = imgBase[imgCounter];
    imgCounter === 5 ? imgCounter = 0 : imgCounter++;

}

setInterval(slide, 5000)