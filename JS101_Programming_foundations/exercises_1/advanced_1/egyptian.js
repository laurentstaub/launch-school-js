/*
Write two functions: one that takes a Rational number as an argument, and returns an Array of the denominators that are part of an Egyptian Fraction representation of the number, and another that takes an Array of numbers in the same format, and calculates the resulting Rational number.

egyptian function
  Input: rational number
  Output: array (denominators)

ALGORITHM
declare an array `result` to store the result

from 2 to until there's nothing left
  divide the number, check if 1/index is smaller than the number
    if it isn't, continue to the next number
    if it is, 
      add the index to the array
      replace the number we are working on by its remainder
*/


const Fraction = require('fraction.js');

function egyptian(fraction) {
  let array = [];
  let denominator = 1;

  while (fraction.n > 0) {
    if (fraction.sub(1 / denominator) >= 0) {
      fraction = fraction.sub(1 / denominator);
      array.push(denominator);
    }
    denominator += 1;
  }

  return array;
}

function unegyptian(array) {
  return array.reduce((acc, nb) => acc + new Fraction(1, nb), 0);
}

console.log(egyptian(new Fraction(1, 2))); // -> [2]
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3