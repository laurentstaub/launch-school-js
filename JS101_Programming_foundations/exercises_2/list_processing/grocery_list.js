/*
PROBLEM
Input: 2-dimensional array
Output: array of strings
Rule: replace the array by n times (array[1]) the fruit (array[0])

ALGORITHM
['apple', 3] => 'apple', 'apple', 'apple'

We declare and initialize an empty array
for each subarray, we add n times the word to the array

*/

function buyFruit(array) {
  let result = [];
  array.forEach(subArray => {
    for (let index = 1; index <= subArray[1]; index += 1) {
      result.push(subArray[0]);
    }
  });

  return result;
}

console.log(buyFruit([['orange', 1]]));
// returns ["orange"]

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]