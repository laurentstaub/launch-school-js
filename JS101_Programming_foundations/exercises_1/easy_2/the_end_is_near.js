/*
Write a function that returns the next to last word in the String passed to it 
as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

PROBLEM
=======
Input: String
Output: String (next to last word)

EXAMPLES
========
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

DATA STRUCTURE
==============
Strings could be turned to an array to get all the words

ALGORITHM
=========
Split the string into its various words
Store these words in an array
Return the word at index - 1 of the array

*/

function penultimate(stringOfWords) {
  let arrayOfWords = stringOfWords.split(" ");
  return arrayOfWords[arrayOfWords.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true