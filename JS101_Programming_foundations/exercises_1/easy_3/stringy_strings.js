// eslint-disable-next-line no-useless-catch
// eslint-disable-next-line max-lines-per-function
/*
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length of
the string should match the given integer.

PROBLEM
-------
Input: number, positive integer
Output: string of alternating 1 and 0

EXAMPLES
--------
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

DATA STRUCTURE
--------------

ALGORITHM
---------

CODE
----
*/

function stringy(number) {
  return [...Array(number)]
    .map((el, index) => (index % 2 === 0 ? "1" : "0"))
    .join("");
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));