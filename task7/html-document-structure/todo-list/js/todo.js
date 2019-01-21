'use strict';

const globalList = document.querySelector('.todo-list');
const doneList = globalList.querySelector('.done');
const toDoList = globalList.querySelector('.undone');


globalList.addEventListener('click', changeTaskStatus)

function changeTaskStatus(event) {
    const parentEl =  event.target.parentElement;
    console.log(event.target.tagName);
    if ((parentEl.tagName === "SECTION") & !(event.target.tagName === 'H2')) {
        let childToMove = event.target;
        if (childToMove.parentElement.classList.contains('done')) {
            doneList.removeChild(childToMove);
            toDoList.appendChild(childToMove);
        } else {
            toDoList.removeChild(childToMove);
            doneList.appendChild(childToMove);
        }
    }
}