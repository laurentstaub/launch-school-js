/*
PROBLEM
-------
Reverse Number
Write a function that takes a positive integer as an argument and returns that
number with its digits reversed.

Input and output: number

EXAMPLES
--------
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

DATA STRUCTURE
--------------
numbers - strings or arrays ?

ALGORITHM
---------
we convert the number to a string, then to an array
we reverse the array
we convert the array to a string then to a number

*/

function reverseNumber(number) {
  let reversedStringedNumber = String(number)
    .split("")
    .reverse()
    .join("");
  return parseInt(reversedStringedNumber, 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1