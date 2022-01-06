/*
Given 2 strings, your job is to find out if there is a substring that appears
in both strings. You will return true if you find a substring that appears
in both string, false otherwise. Substrings must be at least 2 characters long.

input: string, string
output: boolean

we just need to test substrings that are 2 characters long: if a 3 char long
common sequence is found, at 2 2 char long sequences will match.

APPROACH 1: get all substring of length 2, check if included in the other one
*/

function substringTest(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let substringsOfTwo = [];
  for (let index = 0; index < string1.length - 1; index += 1) {
    substringsOfTwo.push(string1.slice(index, index + 2));
  }

  for (let index = 0; index < substringsOfTwo.length; index += 1) {
    if (string2.includes(substringsOfTwo[index])) return true;
  }

  return false;
}

console.log(substringTest('Something', 'fun') === false);
console.log(substringTest('Something', 'home') === true);
console.log(substringTest('BANANA', 'banana') === true);