/*
You are given an array of integers; Take the array and find an index N where
the sum of the integers to the left of N is equal to the sum of the sum on the
right. Return -1 if no match.

Input: array
Output: number (index or -1)

Iterate through the array
  get the array on the left
  get the array on the right

  if the sum of both is equal return the index

*/

function findEvenIndex(array) {

  for (let index = 0; index < array.length; index += 1) {
    let sumRight = array.slice(0, index).reduce((acc, value) => acc + value, 0);
    let sumLeft = array.slice(index + 1).reduce((acc, value) => acc + value, 0);

    if (sumRight === sumLeft) return index;
  }

  return -1;
}


console.log(findEvenIndex([1, 2, 3, 2, 1]));  // 2
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([-1, -2, -3, -2, -1])); // 2
