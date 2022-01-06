/*
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

Input: array of arrays
Output: array

Declare a `result` variable and initialize it to an empty array

Iterate over each subarray
  We want to add sub[1] times sub[0] to `result``

Return `result`

*/

function buyFruit(array) {
  let result = [];

  array.forEach(sub => {
    for (let count = 1; count <= sub[1]; count += 1) {
      result.push(sub[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]