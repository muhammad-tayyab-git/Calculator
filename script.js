
function allFunction(inputValue) {
  let inputField = document.getElementById('input');
  let input = inputField.value;

  switch (inputValue) {
    case 'AC':
      inputField.value = '';
      break;
    case 'del':
      inputField.value = input.slice(0, -1);
      break;
    case '=':
      inputField.value = eval(input);
      break;
 
    default:
      inputField.value += inputValue;
  }
}
