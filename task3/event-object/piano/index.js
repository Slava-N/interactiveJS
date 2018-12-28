'use strict';

const sounds = {lower:['sounds/lower/first.mp3', 'sounds/lower/second.mp3','sounds/lower/third.mp3','sounds/lower/fourth.mp3','sounds/lower/fifth.mp3'],
    middle:['sounds/middle/first.mp3', 'sounds/middle/second.mp3','sounds/middle/third.mp3','sounds/middle/fourth.mp3','sounds/middle/fifth.mp3'],
    higher:['sounds/higher/first.mp3', 'sounds/higher/second.mp3','sounds/higher/third.mp3','sounds/higher/fourth.mp3','sounds/higher/fifth.mp3']}

const keyboardSet = document.getElementsByClassName('set')[0];
const pianoKeyBoard = document.getElementsByTagName('li');

function shiftSet(event) {
    let currentTone = keyboardSet.className.split(" ")[1];
    let targetTone = 'middle';
    
    if (event.altKey) {
        targetTone = 'higher';
    } else if (event.shiftKey) {
        targetTone = 'lower';
    }

    if (keyboardSet.classList.contains(targetTone)) {
        return none;
        
    } else {
        keyboardSet.classList.remove(currentTone);
        keyboardSet.classList.add(targetTone);
    }
}

function playSound(event) {
    let tone = keyboardSet.className.split(" ")[1];
    let keyNumber = event.currentTarget.className.toLocaleString().split(" ")[0];
    let audioEvent = event.currentTarget.childNodes[1];
    
    audioEvent.src = sounds[tone][+keyNumber-1];
    audioEvent.play()
}

for (const btn of pianoKeyBoard) {
    btn.addEventListener('click', shiftSet);
    btn.addEventListener('click', playSound);
}


