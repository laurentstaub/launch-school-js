/* Leetcode number9
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.

Approach 1
check if reverse is the same as the original string

Approach 2
check is first half is same as second half

const isPalindrome = function(x) {
  return x === Number(String(x).split('').reverse().join(''));
};
*/

const isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let revertedNumber = 0;

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = parseInt(x / 10);
    console.log(revertedNumber, x);
  }

  return x === revertedNumber || x === parseInt(revertedNumber / 10);
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(13231)); // true
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(1231)); // false