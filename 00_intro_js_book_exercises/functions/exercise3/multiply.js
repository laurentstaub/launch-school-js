function multiply(number1, number2) {
  return number1 * number2;
}

function getName(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let number1 = getName('Enter the first number: ');
let number2 = getName('Enter the second number: ');
let result = multiply(number1, number2);
console.log(`${ number1 } * ${ number2 } = ${ result }`);