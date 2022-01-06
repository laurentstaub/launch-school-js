/* PROBLEM DESCRIPTION

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in the array. The order of the numbers in the input array should not matter.

Input: array
Output: array (of arrays) or an empty array

Rules:
 - all pairs with a difference of 2
 - return arrays in ascending order
 - no duplcate number
 - result, we can use a number 2 times
 
Algorithm
Sort the given array in ascending order
Declare a variable `result` assigned to an empty array

For each number of the array, check if this number + 2 exists
  If it does not match, we continue
  If it does match, we want to add the number and number + 2 to the `result` array, add the pair as an array
  
Return the `result` array

*/

function differenceOfTwo(array) {
  array.sort((a, b) => a - b);
  let result = [];
  
  for (let index = 0; index < array.length - 1; index += 1) {
    let number = array[index];
    if (!array.includes(number + 2)) continue;
    else result.push([number, number + 2]);
  }
  
  return result;
}

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []