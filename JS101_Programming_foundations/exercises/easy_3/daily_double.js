/*
Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.

PROBLEM
-------
Input: string
output: string
Undestanding: if a string is repeated, it should be taken into account only
once.

EXAMPLES
--------
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

DATA STRUCTURE
--------------
Input: string
Intermediate, will we need an array ?
output: string

ALGORITHM
---------
We create an empty array by splitting the input string
For each character in the array, we compare it to the previous one
  If the character is the same as the previous one

CODE
----
*/

function crunch(string) {
  return string
    .split("")
    .filter((character, index) => { 
      return character !== string[index - 1];
    })
    .join("");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunchRegex(string) {
  return string.replace(/(.)(?=\1)/g, "");
}

console.log(crunchRegex('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunchRegex('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunchRegex('4444abcabccba'));              // "4abcabcba"
console.log(crunchRegex('ggggggggggggggg'));            // "g"
console.log(crunchRegex('a'));                          // "a"
console.log(crunchRegex(''));                           // ""

function crunchRegexMatch(string) {
  return string
    .match(/(.)(?!\1)/g)
    .join('');
}

console.log(crunchRegexMatch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunchRegexMatch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunchRegexMatch('4444abcabccba'));              // "4abcabcba"
console.log(crunchRegexMatch('ggggggggggggggg'));            // "g"
console.log(crunchRegexMatch('a'));                          // "a"
console.log(crunchRegexMatch(''));                           // ""