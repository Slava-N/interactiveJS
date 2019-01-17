'use strict'

let totalCount = 0;
let doneCount = 0;
const output = document.getElementsByTagName('output')[0];
const tasks = document.querySelectorAll('.list-block input');



function initialCount(){
    totalCount = tasks.length;
    doneCount = document.querySelectorAll('.list-block input[checked]').length;
    resultTotal(doneCount, totalCount);
}
document.addEventListener('DOMContentLoaded', initialCount);



function resultTotal(ready, total){
    if (ready == totalCount){
        document.querySelector('.list-block').classList.add('complete');
    }else{
        document.querySelector('.list-block').classList.remove('complete');
    }
    output.innerHTML = `${ready} из ${total} задач`;
}

function checkBox() {
    if (this.checked) {
        doneCount += 1;
    } else {
        doneCount -= 1;
    }
    resultTotal(doneCount, totalCount);
}


for (let task of tasks) {
    task.addEventListener('change', checkBox)
}
