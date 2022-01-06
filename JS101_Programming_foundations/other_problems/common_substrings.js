// Given 2 strings, your job is to find out if there is a substring
// that appears in both strings. You will return true if you find a
// substring that appears in both strings, or false if you do not.
// We only care about substrings that are longer than one letter long.

/*
PROBLEM
Input: 2 strings
Output: boolean
Rules: determine if a string > 1 matches in both strings
       case insensitive

DATA STRUCTURE
Arrays

ALGORITHM
Create 2 arrays of substrings of length 2
  Iterate through the string and add the substrings to the array

Iterate through the first array
  Does a substring in the second array matches ?
    If it does return true (can't use forEach here)


*/

function substrings(string) {
  string = string.toLowerCase();
  let array = [];

  for (let index = 0; index < string.length - 1; index += 1) {
    array.push(string[index] + string[index + 1]);
  }
  
  return array;
}

function substringTest(string1, string2) {
  if (string1.length < 2 || string2.length < 2) return false;
  let array1 = substrings(string1);
  let array2 = substrings(string2);

  for (let index1 = 0; index1 < array1.length; index1 += 1) {
    for (let index2 = 0; index2 < array2.length; index2 += 1) {
      if (array1[index1] === array2[index2]) return true;
    }
  }

  return false;
}


console.log(substringTest('', '') === false);
console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('', 'Fun') === false);
console.log(substringTest('Something', '') === false);
console.log(substringTest('BANANA', 'Banana') === true);
console.log(substringTest('1234567', '5457') === true);
