/*
PROBLEM
-------
Array Average
Write a function that takes one argument, an array of integers, and returns the
average of all the integers in the array, rounded down to the integer component
of the average. The array will never be empty, and the numbers will always be
positive integers.

Input: Array
Output: Number (integer)

EXAMPLES
--------
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

CODE
----
function average(array) {
  let total = 0;

  for (let index = 0; index < array.length; index += 1) {
    total += array[index];
  }

  return Math.floor(total / array.length);
}

function average(array) {
  let total = 0;

  array.forEach(number => total += number);

  return Math.floor(total / array.length);
}
*/

function average(array) {
  let total = array.reduce((total, number) => total + number, 0);

  return Math.floor(total / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

