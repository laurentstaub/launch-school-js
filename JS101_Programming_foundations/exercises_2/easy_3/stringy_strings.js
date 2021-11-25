/*
PROBLEM
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

EXAMPLES(see below)
DATA STRUCTURE

ALGORITHM
  create an array of length number and fill it with 1
  change every odd index to 0
  join the array

*/

function stringy(number) {
  return new Array(number)
    .fill(0)
    .map((_, index) => index % 2 === 0 ? 1 : 0)
    .join('');
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"