function addInput(value = '') {
  const inputContainer = document.querySelector('#inputContainer');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'value');
  input.setAttribute('value', value);
  inputContainer.appendChild(input);
}