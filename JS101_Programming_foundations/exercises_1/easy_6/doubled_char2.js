/*
PROBLEM
-------
Double Char (Part 2)
Write a function that takes a string, doubles every consonant character in the
string, and returns the result as a new string. The function should not double
vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Input: string
Output: string

EXAMPLES
--------
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

DATA STRUCTURE
--------------
strings - arrays

ALGORITHM
---------
we define a doubleConsonants function
we set an empty array
we set an array of consonants for reference
we iterate the string
  if the character is in the reference array
    we add the character
  we add the character
we return the joined array

CODE
----
*/

function doubleConsonants(string) {
  const modifiedCharacteres = [];
  const consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's',
    't', 'v', 'w', 'x', 'y', 'z'
  ];

  for (let index = 0; index < string.length; index +=1 ) {
    let char = string[index];
    
    if (consonants.includes(char)) {
      modifiedCharacteres.push(char);
    }
    modifiedCharacteres.push(char);
  }

  return modifiedCharacteres.join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""