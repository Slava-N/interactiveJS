'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
ws.addEventListener('message', event => {
    console.log(event.data);
    highlightNumber('websocket', event.data);
});