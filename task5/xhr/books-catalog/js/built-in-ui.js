/* Данный JS код */

// Регулируем видимость карточки

const contentSpace = document.getElementById('content');


function toggleCardVisible () {
 contentSpace.classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}

document.getElementById('close').addEventListener('click', toggleCardVisible);

contentSpace.addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});

function loadContent() {
    console.log('ok')
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad)
    xhr.open('GET',
        'https://neto-api.herokuapp.com/book/',
        true)
    xhr.send();

    function onLoad() {
        let data = JSON.parse(xhr.responseText);

        // console.log(data);
        // console.log(data[1])
        for (let i = 0; i < data.length; i++) {
            let book = data[i];
            // console.log(book);
            let bookTag = document.createElement('LI');
            bookTag.setAttribute('data-title', book.title)
            bookTag.setAttribute('data-author', book.author.name)
            bookTag.setAttribute('data-info', book.info)
            bookTag.setAttribute('data-price', book.price)
            let imgTag = document.createElement('img');
            imgTag.setAttribute('src', book.cover.small);
            bookTag.appendChild(imgTag);
            contentSpace.appendChild(bookTag);
        }
    }
}

document.addEventListener('DOMContentLoaded', loadContent);