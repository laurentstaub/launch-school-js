/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Input: 2 numbers
Output: one number

Index array.length - pos
*/

function rotateRightmostDigits(nb, pos) {
  let index = String(nb).length - pos;
  let array = String(nb).split('');
  let spliced = array.splice(index, 1);

  array.push(spliced);

  return Number(array.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917