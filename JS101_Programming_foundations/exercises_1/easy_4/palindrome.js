/*
Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. A palindrome reads the same forwards and 
backwards. For this problem, the case matters and all characters matter.

PROBLEM
-------
Input: string
Output: boolean

EXAMPLES
--------
Copy Code
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

ALGORITHM
Turn the string to an array
If the array length is odd, we get rid of the center character
Get the first half of the string and store it in an array
Get the second half of the string and reverse it to store in an array
We take items from the end of the second array and see if it matches the 
other array elements

arrayBeginning = [3, 5, 6];
arrayEnd = [6, 5, 3]
[0, 1, 2]

*/
function isPalindrome(string) {
  let array = string.split("");
  if (array.length % 2 !== 0) {
    array.splice(Math.floor(array.length / 2), 1);
  }

  let arrayBeginning = array.slice(0, (array.length / 2));
  let arrayEnd = array.slice((array.length / 2) , array.length);

  for (let index = 0; index < arrayBeginning.length; index += 1) {
    if (arrayBeginning[index] !== arrayEnd.pop()) {
      return false;
    } 
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}