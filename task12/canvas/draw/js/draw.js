'use strict';

const lineWidth = updateLineWidth();
const hue = changeHue();
const canvasSpace = document.getElementById('printFigures');
let drawLine = false;
const ctx = canvasSpace.getContext('2d');
ctx.lineCap = 'round' ;
ctx.lineJoin = 'round';

function prepareSpace() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvasSpace.setAttribute('width', width);
    canvasSpace.setAttribute('height', height);
    ctx.clearRect(0, 0, width, height);
}

prepareSpace();

window.addEventListener('resize', () => {
    prepareSpace();
});

canvasSpace.addEventListener("mousedown", (e) => {
    drawLine = true;
});
canvasSpace.addEventListener("mouseup", () => {
    drawLine = false;
});

canvasSpace.addEventListener("mousemove", (e) => {
    if (drawLine) {
        const point = [e.offsetX, e.offsetY];
        drawPoint(point, lineWidth(), hue(e));
    }
});

canvasSpace.addEventListener('dblclick', prepareSpace);

function updateLineWidth() {
    const lineMinWidth = 5;
    const lineMaxWidth = 100;
    let currentWidth = lineMaxWidth;
    let growth = true;

    return function() {
        if (currentWidth < lineMaxWidth && growth) {
            return currentWidth = currentWidth + 1/4;
        } else {
            growth = false;
        }
        if (currentWidth > lineMinWidth && !growth) {
            return currentWidth = currentWidth - 1/4;
        } else {
            growth = true;
        }
    }
}
function drawPoint(point, size, hue) {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.arc(point[0], point[1], size, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

function changeHue() {
    const minHue = 0;
    const maxHue = 359;
    let currentHue = 0;
    return function (event) {
        if (currentHue < minHue) {
            currentHue = maxHue;
        }
        if (currentHue > maxHue) {
            currentHue = minHue;
        }
        event.shiftKey ? currentHue-- : currentHue++;
        return currentHue;
    }
}