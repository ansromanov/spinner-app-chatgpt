function removeInput() {
  const inputContainer = document.querySelector('#inputContainer');
  const inputs = inputContainer.querySelectorAll('input');
  if (inputs.length > 0) {
    inputContainer.removeChild(inputs[inputs.length - 1]);
  }
}