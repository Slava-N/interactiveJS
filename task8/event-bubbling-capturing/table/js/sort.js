'use strict';


const table = document.querySelector('table');
table.addEventListener('click', handleTableClick);

function handleTableClick(event) {
    let targetSpace = event.target;
    if (targetSpace.classList.contains('prop__name')) {
        table.dataset.sortBy = targetSpace.dataset.propName;
        targetSpace.dataset.dir = changeDir(targetSpace.dataset.dir);
        sortTable(targetSpace.dataset.propName, table.dataset.dir)
        console.log(event.target);
    }
}

function changeDir(dir) {
    return (dir === '1' ? -1 : 1);
}


// console.log(changeDir('1'))
// console.log(changeDir('-1'))

