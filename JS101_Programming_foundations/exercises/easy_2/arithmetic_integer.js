const readline = require('readline-sync');

let firstNumber = Number(readline.question('Enter the first number:\n'));
let secondNumber = Number(readline.question('Enter the second number:\n'));

console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
