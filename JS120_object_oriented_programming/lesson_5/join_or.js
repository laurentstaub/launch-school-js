/*
PROBLEM
Take an array and insert a punctuation sign between each element, except
for the last junction, where we use punctuation plus a word.

By default, puncuation is a comma and the word is 'or'
If only 2 elements are present, no punctuation sign is added, only the
junction word.

EXAMPLES

ALGORITHM
*/

function joinOr(array, separator = ', ', word = 'or') {
  if (array.length === 1) return array[0].toString();
  if (array.length === 2) return array[0] + " " + word + " " + array[1];
  else {
    let lastIndex = array.length - 1;
    array[lastIndex] = word + " " + array[lastIndex];
    return array.join(separator);
  }
}

console.log(joinOr([1]));                   // "1"
console.log(joinOr([1, 2]));                   // "1 or 2"
console.log(joinOr([1, 2, 3]));                // "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));          // "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));   // "1, 2, and 3"console.log(