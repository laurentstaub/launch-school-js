// Write a method that takes in a number and returns a string, placing
// a dash in between odd digits.

/*
PROBLEM
Input: number
Output: string
Rules: add a dash in between odd digits

ALGORITHM
Create a function that checks if a string is odd
Create a variable that will store the result (empty string)
Change number to an array of strings
Iterate over the array (each character)
  If the character is odd and the next as well, add a '-' between them


*/

function isOdd(string) {
  return Number(string) % 2 === 1;
}

function dasherizer(number) {
  let result = '';
  let array = String(number).split('');

  array.forEach((char, index) => {
    if (isOdd(char) && isOdd(array[index + 1])) result += char + '-';
    else result += char;
  });
  
  return result;
}

console.log(dasherizer(2112) === '21-12');
console.log(dasherizer(201105742) === '201-105-742');
console.log(dasherizer(123456789) === '123456789');
console.log(dasherizer(21121) === '21-121');

