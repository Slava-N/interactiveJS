const playersList = document.getElementsByClassName('audio-player');

const clapButton = document.getElementsByClassName('key-clap');
const hihatButton = document.getElementsByClassName('key-hihat');
const kickButton = document.getElementsByClassName('key-kick');
const openHatButton = document.getElementsByClassName('key-openhat');
const boomButton  = document.getElementsByClassName('key-boom');
const rideButton = document.getElementsByClassName('key-ride');

// const buttonList = [{clapButton: 0}, {hihatButton: 1}, {kickButton: 2}, {openHatButton: 3}, {boomButton: 4}, {rideButton: 5}]

// clapButton.onclick[0] = playersList[0].playSound();


clapButton[0].onclick = () => {
    playersList[0].play();
};

hihatButton[0].onclick = () => {
    playersList[1].play();
};

kickButton[0].onclick = () => {
    playersList[2].play();
};

openHatButton[0].onclick = () => {
    playersList[3].play();
};
//


boomButton[0].onclick = () => {
    playersList[4].play();
};

rideButton[0].onclick = () => {
    playersList[5].play();
};