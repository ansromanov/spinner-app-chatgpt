function spin() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/spin', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector('#result').innerHTML = this.responseText;
    }
  };

  const inputs = document.querySelectorAll('input[name="value"]');
  const values = Array.from(inputs).map(input => input.value);
  xhr.send(JSON.stringify({ values }));
}
