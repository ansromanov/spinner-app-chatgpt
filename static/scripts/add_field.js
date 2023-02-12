function addInput() {
  const inputContainer = document.querySelector('#inputContainer');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'value';
  inputContainer.appendChild(input);
}
