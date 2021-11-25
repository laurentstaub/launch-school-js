/*
PROBLEM
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

Input: bigInt (number of digits)
Output: bigInt (index in the fibonacci suite)

ALGORITHM
We declare an index of 1
We go through the fibonacci numbers and increment the index by 1 on each new fibonacci number
If the number of digits of the fibonacci number matches the number of digit, we return the index
*/

function findFibonacciIndexByLength(number) {
  let index = 2n;
  let fibo1 = 1n;
  let fibo2 = 1n;
  let fibo = 2n;

  while (String(fibo).length !== Number(number)) {
    fibo = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo;
    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
