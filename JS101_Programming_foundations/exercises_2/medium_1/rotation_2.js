/*
PROBLEM
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Input: 2 numbers
Output: 1 number
Rules: put the nth righmost digit to at the end

EXAMPLES (see below)

DATA STRUCTURE

ALGORITHM
We transform the number to an array
We remove the nth element from the right

*/
function rotateRightmostDigits(number, rigthIndex) {
  let array = String(number).split('');
  let element = array.splice(array.length - rigthIndex, 1);
  return Number(array.concat(element).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917