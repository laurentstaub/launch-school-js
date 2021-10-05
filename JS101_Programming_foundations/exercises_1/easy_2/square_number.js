const multiply = (num1, num2) => num1 * num2;

const square = (number) => multiply(number, number);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

/*
OFFICIAL SOLUTION

function square(number) {
  return multiply(number, number);
}

PROBLEM
=======
We need to use multiply to return "the power of n of a number"
Input: two numbers, one is the number to do the calculation on, one is the power
Output: a number

EXAMPLES
========
power(2, 2);    // 4
power(2, 3);    // 8
power(1, 10);   // 1
power(10, 4);   // 10000

DATA STRUCTURE
==============
No specific structure to be used

ALGORITHM
=========
We need to call multiply n-1 times

Base case: When we hit multiply for n = 2

CODE
====
*/

function power(number, n) {
  if (n === 2) {
    return multiply(number, number);
  } else 
    return multiply (number, power(number, n-1));
}
