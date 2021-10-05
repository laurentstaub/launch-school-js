/*
PROBLEM
-------
Multiplicative average
Write a function that takes an array of integers as input, multiplies all of
the integers together, divides the result by the number of entries in the array,
and returns the result as a string with the value rounded to three decimal
places.

Input: array of integers
Output: string

EXAMPLES
--------
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

DATA STRUCTURE
--------------
operations
toFixed for the 3 digits

ALGORITHM
---------
set total to 1
for each number in the array
  multiply total by number
divide total by array length
use toFixed to display the result as a string
*/

function multiplicativeAverage(array) {
  let total = 1;
  array.forEach(element => total *= element);
  let average = total / array.length;
  return String(average.toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"