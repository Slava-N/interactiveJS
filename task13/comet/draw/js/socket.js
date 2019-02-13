'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/printFigures');
let drawSpace = window.editor;

// function updateDashboard(event) {
//
//      event.canvas.toBlob(blob => {
//         ws.send(blob)
//     })};

ws.addEventListener('open', (event) => {
    drawSpace.addEventListener('update', (event) => {
        event.canvas.toBlob(blob =>{ws.send(blob)})
    })
});
