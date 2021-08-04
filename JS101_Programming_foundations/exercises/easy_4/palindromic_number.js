/*
Write a function that returns true if its integer argument is palindromic, or 
false otherwise. A palindromic number reads the same forwards and backwards.

Examples:

Copy Code
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

*/

function isPalindromicNumber(number) {
  string = number.toString(8);
  return string === string.split('').reverse().join('');
}

console.log(isPalindromicNumber(00034543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(00022));           // true
console.log(isPalindromicNumber(123321));            // true