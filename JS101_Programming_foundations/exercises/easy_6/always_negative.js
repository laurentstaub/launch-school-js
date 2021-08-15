/*
PROBLEM
-------
Always Return Negative
Write a function that takes a number as an argument. If the argument is a
positive number, return the negative of that number. If the argument is a
negative number, return it as-is.

EXAMPLES
--------
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

DATA STRUCTURE
--------------

ALGORITHM
---------

CODE
----
function negative(number) {
  return -1 * Math.abs(number);
}
*/

function negative(number) {
  return Math.sign(number) === -1 ? number : -1 * number;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0