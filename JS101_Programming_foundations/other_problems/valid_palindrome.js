/*
Leetcode 125
A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads the 
same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Input: string;
Output: boolean

Approach 1: reverse
Block 1: remove all non alphanumeric characters
  change all characters to lowercase
  declare an empty string
  iterate over the string
    if the letter uppercase is different than the lowercase version, keep it
    if the char is a number, keep it
    otherwise, remove it
Block 2: check if it is a palindrome


const isPalindrome = function(string) {
  string = string.toLowerCase();
  let result = '';
 
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (char.toLowerCase() !== char.toUpperCase()) result += char;
    if (char >= '0' && char <= '9') result += char;
  }

  return result === result.split('').reverse().join('');
};

const isPalindrome = function(string) {
  const isAlphaNum = char => {
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
  }
  string = string.toLowerCase();
  let result = '';
 
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (isAlphaNum(char)) result += char;
  }

  return result === result.split('').reverse().join('');
};
*/

const isPalindrome = function(string) {
  const isAlphaNum = char => {
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
  }
  string = string.toLowerCase();
 
  for (let idx = 0, jdx = string.length - 1; idx < jdx; idx += 1, jdx -= 1) {
    while (idx < jdx && !isAlphaNum(string[idx])) idx += 1;
    while (idx < jdx && !isAlphaNum(string[jdx])) jdx -= 1;
    if (string[idx] !== string[jdx]) return false;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true