/*
Implement a function called **countUniqueValues,** which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

PROBLEM
Count unique values in a sorted array
Input: array
Output: number
Rules: array is sorted

ALGORITHM
Approach 1: We go through each element, if it is different from the next element,
we increment `count` by 1.

Approach 2: We filter the array so that if an element is similar to the previous
one, it's out
  Task 1: Filter out the element similar to the previous one
  Task 2: Return the length of the array

Approach 3: double pointer
    i1
[1, 2, 2]
       i2
 i1
[1, 1, 2, 2, 3, 3]
    i2

function countUniqueValues(array) {
  return array.filter((number, index) => number !== array[index - 1]).length
}
*/

function countUniqueValues(array) {
  if (array.length === 0) return 0;
  let index1 = 0;
  let index2 = 1;

  while (index2 < array.length) {
    if (array[index2] === array[index1]) {
      index2 += 1;
    } else {
      index1 += 1;
      array[index1] = array[index2];
      index2 += 1;
    }
  }

  return index1 + 1;
}


console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1, 2])); // 2
console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 1, 2, 3, 3])); // 3
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4