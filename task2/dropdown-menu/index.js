const wrapperList = document.getElementsByClassName('wrapper-dropdown')[0];

function activateList() {
    this.classList.toggle('active')
}

wrapperList.onclick = activateList;
