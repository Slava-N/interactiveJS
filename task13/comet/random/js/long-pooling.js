'use strict';


function longPooling() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling');
    request.addEventListener('load', update);
    request.send();
}

function update(event) {
    highlightNumber('long-pooling', event.target.responseText);
    console.log('long',event.target.responseText)
    longPooling();
}

longPooling();