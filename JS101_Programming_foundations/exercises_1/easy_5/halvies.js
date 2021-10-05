/*
PROBLEM
-------
Write a function that takes an array as an argument and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array.

Input: array
Output: array of arrays

EXAMPLES
--------
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

DATA STRUCTURE
--------------

ALGORITHM
---------
We create an array to store the 2 new arrays, array1 and array2
We calculate the length of the given array
We divide the array length by two and get the ceiling of that number
  This will be the length of the array1
  The other array 
We create array1
We create array2
We slice given array from 0 to array1 length and assign it to array1
We slice given array from array1 length to given array length and assign it to
array 2
We push array1 and array2 to the new array

CODE
----
*/
function halvsies(array) {
  let newArray = [];
  let arrayLength = array.length;
  let array1Length = Math.ceil(array.length / 2);

  let array1 = array.slice(0, array1Length);
  let array2 = array.slice(array1Length, arrayLength);

  newArray.push(array1, array2);
  return newArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/*
OFFICIAL SOLUTION
-----------------

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}
*/