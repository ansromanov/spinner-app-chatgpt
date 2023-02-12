function removeInput() {
  const inputContainer = document.querySelector('#inputContainer');
  const inputs = inputContainer.querySelectorAll('input');
  if (inputs.length > 1) {
    inputContainer.removeChild(inputs[inputs.length - 1]);
  }
}