/*
PROBLEM
-------
Write a function that takes two arrays as arguments and returns an array
containing the union of the values from the two. There should be no duplication
of values in the returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays.

input: 2 arrays
output: one array

EXAMPLES
--------
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

DATA STRUCTURE
--------------
Arrays

ALGORITHM
---------


for each element in the array2, 
  if it is already present = check if there is a match for this number in array1
    don't add
  if it's not present
    add to array1
return array1


CODE
----
*/

function union(array1, array2) {
  array2.forEach(number => {
    if (!array1.includes(number)) {
      array1.push(number);
    }
  });
  return array1;
}

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
                  if (!resultArray.includes(value)) {
                    resultArray.push(value);
                  }
                });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]