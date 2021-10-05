/*
PROBLEM
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
Input: number, number
Output: number

move the nth number to the right hand of the stringand shift the end

EXAMPLES
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

DATA STRUCTURE
number => array => number

ALGORITHM
Turn the string to a an array


*/
function rotateRightmostDigits(number, rightIndex) {
  let array = String(number).split('');
  let numberToMove = array.splice(array.length - rightIndex, 1);
  array.push(numberToMove[0]);
  return Number(array.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917