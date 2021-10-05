/*
Write a function that takes an array of numbers and returns an array with the
same number of elements, but with each element's value being the running total
from the original array.


PROBLEM
-------
Input: Array
Output: Array

EXAMPLES
--------
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

DATA STRUCTURE
--------------
Arrays

ALGORITHM
---------
For each element of the array
  Either, we sum the element plus the previous (new array)
  Either, we sum all the elements from 0 to the current index (original)

  CODE
  ----
function runningTotal(array) {
  let returnedArray = [];

  for (let index = 0; index < array.length; index += 1) {
    index === 0 ?
      returnedArray.push(array[index]) :
      returnedArray.push(returnedArray[index - 1] + array[index]);
  }

  return returnedArray;
}

*/

function runningTotal(array) {
  let sum = 0;
  return array.map(number => {
    sum += number;
    return sum;
  });
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []