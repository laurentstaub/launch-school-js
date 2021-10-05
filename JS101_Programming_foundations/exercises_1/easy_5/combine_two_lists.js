/*
PROBLEM
-------
Write a function that combines two arrays passed as arguments, and returns a
new array that contains all elements from both array arguments, with each
element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the
same number of elements.

Input: 2 arrays of same length
Output: array double the size of the original arrays

EXAMPLES
--------
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

DATA STRUCTURE
--------------

ALGORITHM
---------

CODE
----

function interleave(array1, array2) {
  let newArray= [];
  for (let index = 0; index < array1.length; index += 1) {
    newArray.push(array1[index], array2[index]);
  }
  return newArray;
}

function interleave(array1, array2) {
  let newArray= [];
  array1.forEach((element, index) => {
    newArray.push(element, array2[index]);
  });
  return newArray;
}

function interleave(array1, array2) {
  let newArray= [];
  array1.map((element, index) => {
    newArray.push(element, array2[index]);
  });
  return newArray;
}

*/

function interleave(array1, array2) {
  return array1.reduce((array, _, index) => {
    array.push(array1[index], array2[index]);
    return array;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    
// [1, "a", 2, "b", 3, "c"]