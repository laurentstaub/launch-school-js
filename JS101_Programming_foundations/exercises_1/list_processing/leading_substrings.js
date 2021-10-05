/*
PROBLEM
=======
Write a function that takes a string argument and returns a list of substrings
of that string. Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest.

EXAMPLES
========
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
*/

function leadingSubstrings(string) {
  let array = [];
  
  for (let index = 1; index <= string.length; index += 1) {
    array.push(string.slice(0, index));
  }

  return array;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]