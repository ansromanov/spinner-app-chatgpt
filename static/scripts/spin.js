function spin() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/spin', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector('#result').innerHTML = "The winner is: " + this.responseText;
      const winner = this.responseText;
      inputs.forEach(input => {
        if (input.value === winner) {
          input.parentNode.removeChild(input);
        }
      });
    }
  };

  const inputs = document.querySelectorAll('input[name="value"]');
  const values = Array.from(inputs).map(input => input.value);
  xhr.send(JSON.stringify({ values }));
}
