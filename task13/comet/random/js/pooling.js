
'use strict';


function init() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://neto-api.herokuapp.com/comet/pooling');
    xhr.addEventListener('load', (event) => {
        // console.log('xhr',event.target.responseText)                        ;
        highlightNumber('pooling', event.target.responseText);
    });
    xhr.send();
}

setInterval(init, 5000);