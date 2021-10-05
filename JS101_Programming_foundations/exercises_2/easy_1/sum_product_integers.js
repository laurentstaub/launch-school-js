const readline = require('readline-sync');
let number = null;
let operation = null;
console.clear();

function sumIntegers(integer) {
  let sum = 0;

  for (let index = 0; index <= integer; index += 1) {
    sum += index;
  }

  return sum;
}

function multiplyIntegers(integer) {
  let product = 1;

  for (let index = 1; index <= integer; index += 1) {
    product *= index;
  }

  return product;
}

do {
  if (Number.isNaN(number)) {
    console.log('=> Please input a valid number');
  }
  number = parseInt(readline.question('Please enter an integer greater than 0: '));
} while (Number.isNaN(number));

do {
  if (!['s', 'p', null].includes(operation)) {
    console.log('=> Please input "s" or "p"');
  }
  operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ').toLowerCase();
} while (!['s', 'p'].includes(operation));

if (operation === 's') {
  let sum = sumIntegers(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}`);

} else if (operation === 'p') {
  let product = multiplyIntegers(number);
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
}