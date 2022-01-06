/*
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.
*/

const readline = require('readline-sync');

let nb1 = Number(readline.question('Enter the 1st number: '));
let nb2 = Number(readline.question('Enter the 2nd number: '));
let nb3 = Number(readline.question('Enter the 3rd number: '));
let nb4 = Number(readline.question('Enter the 4th number: '));
let nb5 = Number(readline.question('Enter the 5th number: '));
let last = Number(readline.question('Enter the last number: '));

let numberArray = [nb1, nb2, nb3, nb4, nb5];

if (numberArray.some(number => number > last)) {
  console.log(`The number ${last} appears in ${nb1}, ${nb2}, ${nb3}, ${nb4}, ${nb5}.`);
} else {
  console.log(`The number ${last} does not appear in ${nb1}, ${nb2}, ${nb3}, ${nb4}, ${nb5}.`);
}