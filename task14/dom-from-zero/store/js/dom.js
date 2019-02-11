'use strict';

function createElement(node) {
    // console.log(node)
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    let elementNode = document.createElement(node.name);

             // console.log(node.childs)
    if (node.childs instanceof Array) {
        // console.log(node)
        node.childs.forEach(child => {
            let childrenNodes = createElement(child);
            elementNode.appendChild(childrenNodes);
        });

    }
    if (typeof node.props === 'object' && node.props !== null) {
        Object.keys(node.props).forEach(n => elementNode.setAttribute(n, node.props[n]));
    }

    return elementNode;
}

// function createEl