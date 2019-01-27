'use strict';

const articleSection = document.getElementsByClassName('tabs-content')[0];

const tabNavigation = document.getElementsByClassName('tabs-nav')[0];
const navToClone = tabNavigation.firstElementChild;
tabNavigation.removeChild(navToClone);


const articlesList = articleSection.querySelectorAll('[data-tab-title]')

for (let article of articlesList) {
    let newNavChild = navToClone.cloneNode(true);

    newNavChild.firstChild.textContent=article.getAttribute('data-tab-title');
    newNavChild.firstChild.classList.add(article.getAttribute('data-tab-icon'));
    tabNavigation.appendChild(newNavChild);
}

let tabs = tabNavigation.querySelectorAll('li');

for (let tab of tabs) {
    tab.addEventListener('click', tabClick)
}

function hideTabs () {
    for (let article of articlesList) {
    article.classList.add('hidden');
    }
}

function tabClick(event) {

    let activeArticle = Array.from(articlesList).find(element => {
        return element.dataset.tabTitle === event.target.textContent;
    });
    hideTabs();

    for (let tabIcon of tabs) {
        tabIcon.classList.remove('ui-tabs-active')
    }
    activeArticle.classList.remove('hidden');
    event.target.parentElement.classList.add('ui-tabs-active')

}


tabs[0].querySelector('a').click()