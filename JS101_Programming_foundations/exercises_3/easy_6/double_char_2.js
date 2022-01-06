/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

function doubleConsonants(string) {
  let consonants = "bcdfghjklmnpqrstvwxyz";

  return string
    .split('')
    .map(letter => {
      if (consonants.includes(letter.toLowerCase())) {
        return letter + letter;
      };
      return letter;
    })
    .join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""