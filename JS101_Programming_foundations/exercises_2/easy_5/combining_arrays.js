/*
PROBLEM
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Input: 2 arrays
Output: 1 array
Rule: 

EXAMPLES (see below)

DATA STRUCTURE
Arrays

ALGORITHM
copy the first array and add the elements of the second array if not already present
*/

function union2arrays(arr1, arr2) {
  arr2.forEach(number => {
    if (!arr1.includes(number)) arr1.push(number);
  });
  return arr1;
}

function union(arr1, arr2) {
  let newArray = [];
  union2arrays(newArray, arr1);
  union2arrays(newArray, arr2);
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]