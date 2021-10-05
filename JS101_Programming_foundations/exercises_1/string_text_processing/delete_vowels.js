/*
PROBLEM
Write a function that takes an array of strings and returns an array of the same
string values, but with all vowels (a, e, i, o, u) removed.

EXAMPLES
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


*/

function removeVowels(array) {
  return array.map(string => {
    return string
      .split('')
      .filter(character => {
        return !'aeiou'.includes(character.toLowerCase());
      })
      .join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));