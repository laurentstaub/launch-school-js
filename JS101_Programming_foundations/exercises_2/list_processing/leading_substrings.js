/*
PROBLEM
  Input: string
  Output: array of strings
  Rule: return substrings from 1 char to all chars
        sort it if necessary?

ALGORITHM
Set a result array
Loop and set index that goes from 1 to array length
  We slice the string from 0 to index
  We add it to the array
  
We return the array

function leadingSubstrings(string) {
  let result = [];

  for (let index = 1; index <= string.length; index += 1) {
    result.push(string.slice(0, index));
  }

  return result;
}

function leadingSubstrings(string) {
  return string
    .split('')
    .map((_, index) => string.slice(0, index + 1));
}
*/

function leadingSubstrings(string) {
  return string
    .split('')
    .map((_, index) => string.slice(0, index + 1));
}

// EXAMPLES
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]