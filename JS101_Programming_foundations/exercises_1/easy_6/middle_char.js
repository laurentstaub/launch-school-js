/*
PROBLEM
-------
Get The Middle Character
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. 
  
  If the string has an odd length, you should return exactly one character. 
  If the string has an even length, you should return exactly two characters.

Input: string
Output: string of length 1 or 2

EXAMPLES
--------
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

DATA STRUCTURE
--------------
strings

ALGORITHM
---------
we find if the length of the array is odd or even

if it is odd
  we get the character at floor of length / 2

if it is even
  we get the character from length / 2 - 1

*/

function centerOf(string) {
  let length = string.length;

  if (length % 2 === 1) {
    return string[Math.floor(length / 2)];
  } else if (length % 2 === 0) {
    return string.slice((length / 2) - 1, length / 2 + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"