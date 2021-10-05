/*
PROBLEM
Our recursive fibonacci function from an earlier exercise isn't very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

let memo = { 1: 1, 2: 1};

function fibonacci(number) {
  if (memo[number]) {
    return memo[number];
  } else {
    memo[number] = fibonacci(number - 2) + fibonacci(number - 1);
    return memo[number];
  }
}
*/

let memo = [0, 1, 1];

function fibonacci(number) {
  if (memo[number]) return memo[number];
  memo[number] = fibonacci(number - 2) + fibonacci(number - 1);
  return memo[number];
}

console.log(fibonacci(5));
console.log(fibonacci(20));
console.log(fibonacci(30));