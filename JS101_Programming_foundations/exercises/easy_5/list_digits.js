/*
PROBLEM
-------
List of Digits
Write a function that takes one argument, a positive integer, and returns a
list of the digits in the number.

Input: number
Output: array

EXAMPLES
--------
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

DATA STRUCTURE
--------------
number => string => array

ALGORITHM
---------
we convert the number to a string
we create an empty array
we iterate over the string
  we push each character to the array

CODE
----
function digitList(number) {
  let string = String(number);
  let array = [];

  [...string].forEach(char => array.push(Number(char)));
  return array;
}

*/

function digitList(number) {
  return String(number).split("").map(char => Number(char));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]