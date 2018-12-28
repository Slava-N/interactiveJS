
// class visible - nav
// class visible - div1

// вводится последовательность символов


const codeWord = 'ytnjkjubz';
let printedWord = '';


function codeWriter(event) {
    console.log(event.code.slice(-1).toLowerCase());
    let newSymb =  event.code.slice(-1).toLowerCase();
    printedWord += newSymb
    console.log(printedWord)
}

function codeChecker(event) {
    if (printedWord.includes(codeWord)) {
        const secretNav = document.getElementsByTagName('nav')[0];
        const secretDiv = document.getElementsByClassName('secret')[0];
        secretDiv.classList.add('visible');
        secretNav.classList.add('visible');
    }
}

document.addEventListener('keydown', codeWriter);
document.addEventListener('keydown', codeChecker);
