const playersList = document.getElementsByClassName('audio-player');
const buttons = document.getElementsByClassName('drum-kit__drum');
// console.log(buttons, buttons.length);


for (let i = 0; i < (buttons.length); i++) {
    console.log(i)
    buttons[i].onclick = function () {
        playersList[i].currentTime = 0;
        playersList[i].play();
    }
}
