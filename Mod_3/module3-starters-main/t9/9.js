'use strict';


const calculationInput = document.getElementById('calculation');
const calculateButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');


calculateButton.addEventListener('click', () => {

  const input = calculationInput.value;


  let operator;
  let numbers;
  if (input.includes('+')) {
    operator = '+';
    numbers = input.split('+');
  } else if (input.includes('-')) {
    operator = '-';
    numbers = input.split('-');
  } else if (input.includes('*')) {
    operator = '*';
    numbers = input.split('*');
  } else if (input.includes('/')) {
    operator = '/';
    numbers = input.split('/');
  } else {
    resultParagraph.textContent = 'Invalid calculation format.';
    return;
  }

  const num1 = parseInt(numbers[0], 10);
  const num2 = parseInt(numbers[1], 10);
  if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = 'Please enter valid integers.';
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultParagraph.textContent = 'Division by zero is not allowed.';
        return;
      }
      result = Math.floor(num1 / num2);
      break;
    default:
      resultParagraph.textContent = 'Unknown operator.';
      return;
  }

  // Näytä tulos
  resultParagraph.textContent = `The result is: ${result}`;
});