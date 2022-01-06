/*
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Input: 2 arrays
Output: array
*/

function union(arr1, arr2) {
  for (let index = 0; index < arr2.length; index += 1) {
    let number = arr2[index];
    if (!arr1.includes(number)) arr1.push(number)
  }

  return arr1;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]