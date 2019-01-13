const request = new XMLHttpRequest();
request.open('GET', 'https://neto-api.herokuapp.com/weather', true);
request.send();
if (request.status === 200) {
  const response = JSON.parse(request.responseText);
  setData(response);
}


const widget = document.getElementsByTagName('body')[0];
widget.addEventListener('click', onclickEvent);

function onclickEvent() {
  console.log(event.target)
}