'use strict';

const songs = [{name:'LA Chill Tour', path: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3'},
    {name: 'This is it band', path:'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3'},
    {name: 'LA Fusion Jam', path: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'}];


const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const player = document.getElementsByTagName('audio')[0];
const btnPlay = document.getElementsByClassName('playstate')[0];
const btnPrevious = document.getElementsByClassName('back')[0];
const btnNext = document.getElementsByClassName('next')[0];
const btnStop = document.getElementsByClassName('stop')[0];
let songTitle = document.getElementsByClassName('title')[0];

let currentlyPlaying = 0;
const listLength = songs.length - 1;

const playSong = function() {
    player.src = songs[currentlyPlaying].path;
    songTitle.title = songs[currentlyPlaying].name;
    if (mediaplayer.classList.contains('play')) {
        player.play();
    }
};

playSong();

btnStop.onclick = function() {
    player.pause();
    player.currentTime = 0;
    mediaplayer.classList.remove('play')
};

btnPlay.onclick = () =>  {
    if (!mediaplayer.classList.contains('play')) {
        player.play();
        mediaplayer.classList.add('play');
    } else {
        player.pause();
        mediaplayer.classList.remove('play');
    }
};

btnNext.onclick = function() {
    currentlyPlaying === listLength ? currentlyPlaying = 0 : currentlyPlaying++;
    playSong();
};

btnPrevious.onclick = function() {
    currentlyPlaying === 0 ? currentlyPlaying = listLength : currentlyPlaying--;
    playSong();
};