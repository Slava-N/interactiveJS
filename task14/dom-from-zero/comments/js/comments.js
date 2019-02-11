'use strict';
//
// function showComments(list) {

function newComment(comment) {
    const textList = comment.text.split('\n');
    // console.log(comment)

    return createNewElement('div', {class: 'comment-wrap'}, [

        createNewElement('div', {class: 'photo', title: comment.author.name}, [
            createNewElement('div', {class: 'avatar', style: `background-image: url('${comment.author.pic}')`})
        ]),

        createNewElement('div', {class: 'comment-block'}, [
            createNewElement('p', {class: 'comment-text'}, textList.map(item => {
                const br = createNewElement('br');
                const span = createNewElement('span');
                span.textContent = item;
                span.appendChild(br);
                return span;
            })),

            createNewElement('div', {class: 'bottom-comment'}, [
                createNewElement('div', {class: 'comment-date'},
                    new Date(comment.date).toLocaleString('ru-Ru')),
                createNewElement('ul', {class: 'comment-actions'}, [

                    createNewElement('li', {class: 'complain'}, 'Пожаловfаться'),
                    createNewElement('li', {class: 'reply'}, 'Ответит')
                ])
            ])
        ])
    ]);
}

function createNewElement(tagName, attributes, children) {
    let node = document.createElement(tagName);

    if (typeof children === 'string') {
        node.textContent = children;
    } else if (children instanceof Array) {
        children.forEach(child => node.appendChild(child));
    }

    // console.log(tagName, attributes, children)
    if (typeof attributes === 'object') {
        Object.keys(attributes).forEach(i => node.setAttribute(i, attributes[i]));
    }
    return node;
}


function processCommentData(commentList) {
    const commentsSelector = document.querySelector('.comments');
    const newComm = commentList.map(newComment);
    console.log(newComm)
    newComm.forEach(item => commentsSelector.appendChild(item));
}

fetch('https://neto-api.herokuapp.com/comments')
    .then(res => res.json())
    .then(processCommentData);
