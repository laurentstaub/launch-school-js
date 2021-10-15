/*
PROBLEM
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

EXAMPLE
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/

const readline = require('readline-sync');

let number1 = Number(readline.question('==> Enter the first number:\n'));
let number2 = Number(readline.question('==> Enter the second number:\n'));

console.log(`==> ${number1} + ${number2} = ${number1 + number2}
==> ${number1} - ${number2} = ${number1 - number2}
==> ${number1} * ${number2} = ${number1 * number2}
==> ${number1} / ${number2} = ${(number1 / number2).toFixed(0)}
==> ${number1} % ${number2} = ${number1 % number2}
==> ${number1} ** ${number2} = ${number1 ** number2}
`);