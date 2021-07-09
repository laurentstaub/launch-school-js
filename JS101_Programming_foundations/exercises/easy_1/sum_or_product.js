// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.

// EXAMPLE
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

let readline = require('readline-sync');

let integer = Number(readline.question(
  'Please enter an integer greater than 0: '
));

let operation = Number(readline.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
));

if (operation === "s") {
  let sum = 0;

  for (let number = 1; number <= integer; number++) {
    sum += number;
  }

  console.log(
    `The sum of the integers between 1 and ${integer} is ${sum}`
  );

} else if (operation === "p") {
  let product = 1;

  for (let number = 1; number <= integer; number++) {
    product *= number;
  }

  console.log(
    `The product of the integers between 1 and ${integer} is ${product}`);
}

// OFFICIAL SOLUTION
/*
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}
*/
