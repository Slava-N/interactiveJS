'use strict';


const canvas = document.getElementById('wall');
const ctx = canvas.getContext('2d');


let canvasW = canvas.width;
let canvasH = canvas.height;


function nextPoint(x, y, time) {
    return {
        x: x + Math.sin((x + (time / 10)) / 100) * 5,
        y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
    }
}

function nextPoint2(x, y, time) {
    return {
        x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
        y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
    };
}


function minMaxRand(min, max) {
    return Math.random() * (max - min) + min;
}

function createBackground(n) {
    const oughts = [];
    const crosses = [];

    for (let i=0; i < n/2; i++) {

        let newCross= {};
        let newOught = {};

        let size_O = minMaxRand(0.1, 0.6);
        let size_C = minMaxRand(0.1, 0.6);


        let x_O = minMaxRand(0, canvasW);
        let x_C = minMaxRand(0, canvasW);

        let y_O = minMaxRand(0, canvasH);
        let y_C = minMaxRand(0, canvasH);

        newCross.size = size_C
        newCross.side = 20 * size_C;
        newCross.speed = minMaxRand(-0.2, 0.2);
        newCross.angle = minMaxRand(0, 360);
        newCross.border = 5 * size_C;
        newCross.x = x_C;
        newCross.y = y_C;

        newOught.size = size_O;
        newOught.border = 5 * size_O;
        newOught.x = x_O;
        newOught.y = y_O;
        newOught.radius = 12 * size_O;

        oughts.push(newOught);
        crosses.push(newCross);
    }

    return [oughts, crosses]
}

ctx.clearRect(0, 0, canvasW, canvasH);
const oughtsAndCrosses = createBackground(minMaxRand(5,20));


console.log(oughtsAndCrosses)
for (let j = 0; j < oughtsAndCrosses[0].length; j++) {
    let ought = oughtsAndCrosses[0][j];
    ctx.beginPath();
    ctx.strokeStyle = '#ffffff';

    ctx.arc(ought.x, ought.y, ought.radius, 0,2 * Math.PI);
    ctx.lineWidth = ought.border;
    ctx.closePath();
    ctx.fillStyle = '#04BBD3' ;
    ctx.stroke();
    ctx.fill();
}

for (let i = 0; i < oughtsAndCrosses[1].length; i++) {
    let cross = oughtsAndCrosses[1][i];

    ctx.beginPath();

    ctx.strokeStyle = '#ffffff';
    // ctx.fillStyle = '#04BBD3' ;
    ctx.lineWidth = cross.border;

    ctx.moveTo(cross.x, cross.y);
    ctx.lineTo(cross.x, cross.y-cross.side);

    ctx.moveTo(cross.x, cross.y);
    ctx.lineTo(cross.x, cross.y+cross.side);

    ctx.moveTo(cross.x, cross.y);
    ctx.lineTo(cross.x-cross.side, cross.y);

    ctx.moveTo(cross.x, cross.y);
    ctx.lineTo(cross.x + cross.side, cross.y);

    ctx.closePath();
    ctx.stroke();
}
