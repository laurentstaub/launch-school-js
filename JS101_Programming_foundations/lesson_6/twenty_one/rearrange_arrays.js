/*
PROBLEM
=======
Input: an array of subarrays
Output: an array of strings of the same length as the subarrays

EXAMPLES
========
[]                // []
[[0, 1], [1, 2]]  // ['01', '12']
[['a', 'b'], ['c', 'd'], ['e', 'f']]  // ['ace', 'bdf']

DATA STRUCTURE
==============
Arrays and subarrays

[['a', 'b'], ['c', 'd'], ['e', 'f']]    // subarrays of n length
[[], []]                                // Initialize n empty subarrays
[['a', 'c', 'e'], ['b', 'e', 'f']]      // Push the ones at corresponding index
['ace', 'bdf']                          // Join the arrays 

ALGORITHM
=========
Create an array with n empty subarrays
For each array, starting from 0 to subarray.length
  Push the elements at the index in the corresponding subarray
Join each subarray
return the created array

CODE
====
*/

function rearrangeArray(array) {
  let rearrangedArray = [];
  if (array.length === 0) return rearrangedArray;

  array[0].forEach(_ => rearrangedArray.push([]));

  for (let index = 0; index < array[0].length; index += 1) {
    array.forEach(subArray => rearrangedArray[index].push(subArray[index]));
  }

  return rearrangedArray.map(subArray => subArray.join(''));
}


console.log(rearrangeArray([]));
console.log(rearrangeArray([[0, 1], [1, 2]]));
console.log(rearrangeArray([['a', 'b'], ['c', 'd'], ['e', 'f']]));