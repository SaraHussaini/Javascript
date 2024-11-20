'use strict';


const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');


calculateButton.addEventListener('click', () => {
  // Hae käyttäjän syöttämät arvot
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;


  if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = 'Please enter valid numbers.';
    return;
  }

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'multi':
      result = num1 * num2;
      break;
    case 'div':
      if (num2 === 0) {
        resultParagraph.textContent = 'Division by zero is not allowed.';
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultParagraph.textContent = 'Invalid operation selected.';
      return;
  }

  resultParagraph.textContent = `The result is: ${result}`;
});
