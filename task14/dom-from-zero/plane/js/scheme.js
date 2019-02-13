'use strict';

const btnSeatMap = document.getElementById('btnSeatMap');
const btnacselect = document.getElementById('acSelect');

console.log(btnacselect.value);

btnSeatMap.addEventListener('click', (event)=>{
    // event.preventDefault();
    let acId = btnacselect.value;
    fetch(url + acId)
        .then(res => res.json())
        .then(printSeats);
    console.log()
})


function printSeats()


