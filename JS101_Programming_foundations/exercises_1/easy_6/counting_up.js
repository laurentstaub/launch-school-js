/*
PROBLEM
-------
Write a function that takes an integer argument and returns an array containing
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

EXAMPLES
--------
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

DATA STRUCTURE
--------------

CODE
----
*/

function sequence(integer) {
  let array = [];
  for (let index = 1; index <= integer; index += 1) {
    array.push(index);
  }
  return array;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]