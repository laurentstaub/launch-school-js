/*
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/

const readline = require('readline-sync');
const number1 = Number(readline.question('==> Enter the first number:\n'));
const number2 = Number(readline.question('==> Enter the second number:\n'));

console.log(`
==> ${number1} + ${number2} = ${number1 + number2}
==> ${number1} - ${number2} = ${number1 - number2}
==> ${number1} * ${number2} = ${number1 * number2}
==> ${number1} / ${number2} = ${Math.floor(number1 / number2)}
==> ${number1} % ${number2} = ${number1 % number2}
==> ${number1} ** ${number2} = ${number1 ** number2}
`);