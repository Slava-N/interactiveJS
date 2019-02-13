'use strict';

//
const canvas = document.getElementById('wall');
const ctx = canvas.getContext('2d');


let canvasW = canvas.width;
let canvasH = canvas.height;

let objectSpace = [];
let objectNumber = minMaxRand(50, 200);


canvas.setAttribute('width', canvasW);
canvas.setAttribute('height', canvasH);



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

class Figure {
    constructor() {
        this.x = minMaxRand(0, canvasW)
        this.y = minMaxRand(0, canvasH)
        this.newX = 0;
        this.newY = 0;
        this.size = minMaxRand(0.1, 0.6)
        this.color = '#ffffff';
        this.border = 5 * this.size;
    }

    newPoint() {
        const currenTime = Date.now();
        this.newX = nextPoint(this.x, this.y, currenTime).x
        this.newY = nextPoint(this.x, this.y, currenTime).y
    }

    printFigures() {
        this.newPoint();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.border;
    }
}


class Ought extends Figure {
    constructor() {
        super();
        this.radius = 12 * this.size;
    }

    printFigures() {
        super.printFigures();
        ctx.arc(this.newX, this.newY, this.radius, 0, 2 * Math.PI);
        ctx.closePath();

        ctx.stroke();
        // ctx.fill();

    }
}

class Cross extends Figure {
    constructor() {
        super();
        this.side = 20 * this.size;
        this.radius = this.width / 2;
        this.angle = minMaxRand(0, 360);
        this.speed = minMaxRand(-0.2, 0.2);
    }

    printFigures() {
        super.printFigures();
        this.moveItem();
        ctx.translate(this.newX, this.newY);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -this.side);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, this.side);
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.side, 0);
        ctx.moveTo(0, 0);
        ctx.lineTo(this.side, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.closePath();
        ctx.stroke();
    }

    moveItem() {
        this.angle < 0 ? this.angle+=360 : this.angle -=360;
    }
}

function animation() {
    ctx.clearRect(0, 0, canvasW, canvasH);

    objectSpace.forEach((figure) => {
        figure.printFigures();
    });

    window.requestAnimationFrame(animation);
}

function init() {
    for (let i = 0; i < objectNumber/2; i++) {
        let fig1 = new Ought();
        let fig2 = new Cross();
        objectSpace.push(fig1);
        fig1.printFigures();
        objectSpace.push(fig2);
        fig2.printFigures();
    }
    animation();
}

init();
