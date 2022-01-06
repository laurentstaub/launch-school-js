/*
Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the input
string. The input string can be assumed to contain only alphabets (both
uppercase and lowercase) and numeric digits.

PROBLEM
Input: string
Output: number
Rules: case insensitive
      
ALGORITHM
change the string to lowercase
declare a variable `counter`and assign it to an empty object
iterate over the string
  if the char doesn't exist, add a new property to the object and count 1
  if the char exists, add 1 to the corresponding property
count the number of times the count is more than 1 in the object
*/

function duplicateCount(string) {
  string = string.toLowerCase();
  let counter = {};

  string.split('').forEach(char => {
    if (!counter[char]) counter[char] = 1;
    else counter[char] += 1;
  });

  return Object.values(counter).filter(val => val > 1).length;
}

console.log(duplicateCount("")) // 0)
console.log(duplicateCount("abcde")) // 0
console.log(duplicateCount("aabbcde")) // 2
console.log(duplicateCount("aabBcde")) // 2
console.log(duplicateCount("Indivisibility")) // 1
console.log(duplicateCount("Indivisibilities")) // 2 characters may not be adjacent