window.addEventListener('load', function () {
  const inputs = JSON.parse(localStorage.getItem('inputs')) || [];
  inputs.forEach(value => {
    addInput(value);
  });
});

window.addEventListener('beforeunload', function () {
  const inputs = Array.from(document.querySelectorAll('input[name="value"]')).map(input => input.value);
  localStorage.setItem('inputs', JSON.stringify(inputs));
});
