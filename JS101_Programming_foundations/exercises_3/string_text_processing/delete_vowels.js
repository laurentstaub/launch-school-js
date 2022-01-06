/*
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

Input: array of strings
Output: array of strings

Rules:
  - remove both upper and lowercase vowels from all string of the array (iteration)

Iterate over all the strings of the array
  vowels = "aeiouAEIOU"
  replace vowels by an empty string in each string

return the array
*/

function removeVowels(array) {
  return array.map(string => string.replace(/[aeiouAEIOU]/g, ''));
}

console.log(removeVowels(['']));         // ['']
console.log(removeVowels(['ab']));         // ["b"]
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]