function spin() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/spin', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector('#result').innerHTML = this.responseText;
    }
  };
  xhr.send();
}



