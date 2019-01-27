'use strict';


const table = document.querySelector('table');
table.addEventListener('click', handleTableClick);



function handleTableClick(event) {
    let targetSpace = event.target;
    if (targetSpace.classList.contains('prop__name')) {
        table.dataset.sortBy = targetSpace.dataset.propName;
        targetSpace.dataset.dir = changeDir(targetSpace.dataset.dir);
        console.log(targetSpace.dataset.propName, )
        sortTable(targetSpace.dataset.propName, targetSpace.dataset.dir);
    }
}

function changeDir(dir) {
    return (dir === "1" ? "-1" : "1");
}


