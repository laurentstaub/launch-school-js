/*
The parseInt() method converts a string of numeric characters (including an
optional plus or minus sign) to an integer. The method takes 2 arguments where
the first argument is the string we want to convert and the second argument
should always be 10 for our purposes. parseInt() and the Number() method behave
similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate 
number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about 
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
such as String() and Number(). Your function should do this the old-fashioned
way and calculate the result by analyzing the characters in the string.

PROBLEM
=======
Input: String of numbers
Output: Number

EXAMPLES
========
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

DATA STRUCTURE
==============
--
"0".charCodeAt();   // 48
"1".charCodeAt();   // 49

ALGORITHM
=========
We go through each character in the string and we determine 
which character it is with charCodeAt()

CODE
====
*/

function stringToInteger(string) {
  let number = 0;
  let counterUnit = 1;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    let digit = (string[index].charCodeAt() - 48);
    number += digit * counterUnit;
    counterUnit *= 10;
  }

  return number;
}

/*
OFFICIAL SOLUTION

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;

  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;

  // string = "13"
  // arrayOfDigits = ["1", "3"].map(char => DIGITS[char]);
  // arrayOfDigits = [1, 3];
  //
  // [1, 3].forEach(1 => value = (10 * 0) + 1);
  // value = 1
  // [1, 3].forEach(3 => value = (10 * 1) + 3);
  // value = 13


*/

function hexadecimalToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };

  let arrayOfDigits = string.toUpperCase().split("").map(char => DIGITS[char]);
  let value = 0;
  console.log(arrayOfDigits);
  arrayOfDigits.forEach(digit => (value = (16 * value) + digit));
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871);