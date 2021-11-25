/*
function removeVowels(array) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return array.map(word => word.split('').filter(char => !vowels.includes(char)).join(''));
}
*/

function removeVowels(array) {
  return array.map(word => word.replace(/[aeiou]/gi, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]