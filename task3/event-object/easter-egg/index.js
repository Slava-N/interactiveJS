
// class visible - nav
// class visible - div1

// вводится последовательность символов


const codeWord = 'ytnjkjubz';
let printedWord = '';


function codeWriter(event) {
    // console.log(event.code.slice(-1).toLowerCase());
    let newSymb =  event.code.slice(-1).toLowerCase();
    printedWord += newSymb
    // console.log(printedWord)
}

function codeChecker(event) {
    if (printedWord.includes(codeWord)) {
        const secretDiv = document.getElementsByClassName('secret')[0];
        secretDiv.classList.add('visible');
    }
}


function menuChecker(event) {
    if (event.ctrlKey & event.altKey & event.code === 'KeyT') {
        // console.log("yeah");
        const secretNav = document.getElementsByTagName('nav')[0];
        secretNav.classList.toggle('visible');
    }
}

document.addEventListener('keydown', codeWriter);
document.addEventListener('keydown', codeChecker);
document.addEventListener('keydown', menuChecker);
