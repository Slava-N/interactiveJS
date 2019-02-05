'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colors = ['#ffffff', '#ffe9c4', '#d4fbff'];
let canvasW = canvas.width;
let canvasH = canvas.height;

function minMaxRand(min, max) {
    return Math.random() * (max - min) + min;
}

let numberStar = minMaxRand(200, 400);

function createGalaxy(n) {
    const galaxy = [];
    for (let i=0; i < n; i++) {
        
        let size = minMaxRand(0, 1.1);
        let bright = minMaxRand(0.8, 1);
        let x = minMaxRand(0, canvasW);
        let y = minMaxRand(0, canvasH);
        let newStar = {};

        newStar.size = size;
        newStar.bright = bright;
        newStar.x = x;
        newStar.y = y;
        newStar.color = colors[Math.floor(minMaxRand(0, 3))];
        galaxy.push(newStar)
    }
    return galaxy
}

function drawGalaxy() {
    ctx.clearRect(0, 0, canvasW, canvasH);
    

    const stars = createGalaxy(numberStar);
    for (let j = 0; j < stars.length; j++) {
        let star = stars[j];
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0,2 * Math.PI);
        ctx.closePath()  ;
        ctx.fill();
        // console.log(star);
    }
}

canvas.addEventListener('click', drawGalaxy)
