const wrapperList = document.getElementsByClassName('wrapper-dropdown')[0];

function activateList() {
  if(!this.classList.contains('active')) {
      this.classList.add('active');
  } else {
      this.classList.remove('active')
  }
}

wrapperList.onclick = activateList;
