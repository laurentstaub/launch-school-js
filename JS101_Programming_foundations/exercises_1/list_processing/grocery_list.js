/*
PROBLEM
Write a function that takes a grocery list in a two-dimensional array and
returns a one-dimensional array. Each element in the grocery list contains a
fruit name and a number that represents the desired quantity of that fruit.
The output array is such that each fruit name appears the number of times equal
to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
we return an array that contains 3 apples, 1 orange, and 2 bananas.

Input: array of subarrays
Output: array of strings

EXAMPLES
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

DATA STRUCTURE
Array manipulation

ALGORITHM
In each subarray [fruit, n], we want to add a string n times to the fruitArray.

*/

function buyFruit(array) {
  let fruitArray = [];

  array.forEach(subArray => {
    for (let pushTimes = 1; pushTimes <= subArray[1]; pushTimes += 1) {
      fruitArray.push(subArray[0]);
    }
  });

  return fruitArray;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));