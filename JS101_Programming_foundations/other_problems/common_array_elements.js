/*
Given three arrays of integers, return the sum of elements that are common in all three arrays.

PROBLEM
Return the sum of common elements from 3 arrays
Input: 3 arrays
Ouput; number (sum)

EXAMPLES see below

ALGORITHM
Problem 1: Get common elements to a single array
  Sub-problem: get common elements from 2 arrays (order not important)
    Option 1: no sort
    Option 2: sort the arrays first

    [1, 2] [3, 1] => [1]

    Option 1: no sort
      variable result = [1, 2]
      variable newResult = []
      Iterate over [3, 1]
        If number is in the result array
          add it to the newResult array
          remove it from the result array
            need to find its index in the result array
        If no match, nothing to do

  Declare a variable result initialized with the first array
  Declare a variable newResult
  Iterate over the second array, get the common elements to the result array
    (see Sub-problem above)
  Iterate over the thrid array

Problem 2: Sum the array elements from the result array
  I know how to do that one

*/

function common(array1, array2, array3) {
  const getCommons = array => {
    array.forEach(number => {
      if (result.includes(number)) {
        newResult.push(number);
        result.splice(result.indexOf(number), 1);
      }
    })

    result = newResult;
    newResult = [];
  }

  let result = array1
  let newResult = [];

  getCommons(array2);
  getCommons(array3);

  return result.reduce((acc, number) => acc + number, 0);
}

console.log(common([0], [0], [0])); // 0
console.log(common([0], [1], [2])); // 0
console.log(common([1], [1], [1])); // 1
console.log(common([1, 2], [1], [1])); // 1
console.log(common([3],[5, 3, 2], [7, 3, 2])); // 3
console.log(common([3, 5, 6, 19], [5, 3, 2], [7, 3, 2])); // 3
console.log(common([1, 2, 3],[5, 3, 2],[7, 3, 2])); // 5
console.log(common([1, 2, 2, 3],[5, 3, 2, 2],[7, 3, 2, 2])); // 7