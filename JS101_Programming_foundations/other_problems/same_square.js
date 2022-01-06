/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value in the second array. The frequency of values must be the same.

PROBLEM
check if a number in array 1 has its corresponding square in array 2

Input: 2 arrays
Output: true or false
Rules: order doesn't matter
       frequency matters

ALGORITHM
Solution 1: counters
Block 1: count how many times all numbers occur in the arrays
Block 2: check if numbers match
  - check if all keys and all values are the same

Solution 2: check element by element in array 1

*/

function same(array1, array2) {
  if (array1.length !== array2.length) return false;
  
  const count = array => {
    let counter = {};

    for (let number of array) {
      if (!counter[number]) counter[number] = 1;
      else counter[number] += 1;
    }

    return counter;
  }

  let counter1 = count(array1);
  let counter2 = count(array2);

  for (let key in counter1) {
    if (!counter2[Number(key) ** 2]) return false;
    if (counter2[Number(key) ** 2] !== counter1[key]) return false;
  }

  return true;
}

// EXAMPLES
console.log(same([1], [1])); // true
console.log(same([1], [2])); // false
console.log(same([1], [1, 1])); // false
console.log(same([1, 2, 3], [4, 1, 9]));  // true
console.log(same([1, 2, 3], [1, 9]));  // false
console.log(same([1, 2, 1], [4, 4, 1]));  // false (must be same frequency)