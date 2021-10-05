/*
Write a function that calculates and returns the index of the first Fibonacci 
number that has the number of digits specified by the argument. (The first 
Fibonacci number has an index of 1.)

PROBLEM
-------

EXAMPLES
--------
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

DATA STRUCTURES
---------------

function findFibonacciIndexByLength(digits) {
  let results = [1n, 1n];

  while (true) {
    let length = BigInt(results.length);
    let newResult = results[length - 2n] + results[length - 1n];
    results.push(newResult);
    if (BigInt(String(newResult).length) === digits) return (length + 1n);
  }
}
*/

function findFibonacciIndexByLength(digits) {
  let number1 = 1n;
  let number2 = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = number1 + number2;
    count += 1n;
    number1 = number2;
    number2 = fibonacci;
  } while (String(fibonacci).length < digits);

  return count;
}


console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);