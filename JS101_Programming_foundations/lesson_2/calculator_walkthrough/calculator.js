// Welcome use
// Ask user for the first number
// Ask user for the second number
// Ask user for the operation to perform
// Perform operation on the 2 numbers
// Log result to the terminal

const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidString(string) {
  return string !== 'y' && string !== 'n';
}

prompt(messages.en.language);
prompt(messages.fr.language);
let language = readline.question();

while (language !== 'en' && language !== 'fr') {
  prompt(messages.en.notValidLanguage);
  prompt(messages.fr.notValidLanguage);
  language = readline.question();
}

prompt(messages[language]['welcome']);

while (true) {

  prompt(messages[language]['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages[language]['notValidNumber']);
    number1 = readline.question();
  }

  prompt(messages[language]['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages[language]['notValidNumber']);
    number2 = readline.question();
  }

  prompt(messages[language]['operationChoice']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[language]['wrongChoice']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
  }

  prompt(`The result is: ${output}`);

  prompt(messages[language]['otherCalculation']);
  let answer = readline.question();

  while (invalidString(answer)) {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question();
  }

  if (answer !== 'y') break;
}