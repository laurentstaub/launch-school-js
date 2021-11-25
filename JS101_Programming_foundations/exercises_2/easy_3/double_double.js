/*
PROBLEM
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Input: number
Output: number
Rules: doubles the number except if it is a double number

EXAMPLES (see below)
DATA STRUCTURE
numbers, strings, arrays

ALGORITHM
check if number is a double number
  if number is of odd length just return the number times 2
  otherwise, split the number in 2 halves
    if the 2 halves are equal, return number times 2

*/

function twice (number) {
  let str = String(number);
  let string1 = str.slice(0, str.length / 2);
  let string2 = str.slice(str.length / 2);
  if (string1 === string2) return number;

  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676