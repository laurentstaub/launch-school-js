/*
Leet code
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: array
Output: return value boolean
Rules: array not sorted

Approach 1: sort = FASTER (84 ms)
We could sort the array and if an element is the same as the previous, we return
false

Approach 2: counter object/array = ALOT SLOWER (1.5 second)
We could create an array that would store the numbers already found in the array
If this array includes an existing number, we return false
*/


const containsDuplicate = function(arrayNums) {
  arrayNums.sort((a, b) => a - b);

  for (let index = 0; index < arrayNums.length; index += 1) {
    if (arrayNums[index] === arrayNums[index + 1]) return true;
  }

  return false;
};

/*
const containsDuplicate = function(arrayNums) {
  let existing = [];

  for (let index = 0; index < arrayNums.length; index += 1) {
    if (existing.includes(arrayNums[index])) return true;
    else existing.push(arrayNums[index]);
  }

  return false;
};
*/

console.log(containsDuplicate([])); // false
console.log(containsDuplicate([1, 2, 1])); // true
console.log(containsDuplicate([1, 2, 3])); // false
console.log(containsDuplicate([3, 1, 3])); // true
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true