/*
PROBLEM
-------
Double Char (Part 1)
Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.

Input: string
Output: string

EXAMPLES
--------
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

DATA STRUCTURE
--------------

ALGORITHM
---------
We define the function repeater that takes in a string
We define and assign an empty array
We iterate over the string and push 2 times each character to an array
We join the array and return the result

CODE
----
*/

function repeater(string) {
  let doubledChar = [];

  for (let index = 0; index < string.length; index += 1) {
    doubledChar.push(string[index], string[index]);
  }

  return doubledChar.join("");
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""