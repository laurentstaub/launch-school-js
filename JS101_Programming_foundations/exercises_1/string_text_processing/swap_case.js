/*
PROBLEM
Write a function that takes a string as an argument and returns that string with
every lowercase letter changed to uppercase and every uppercase letter changed
to lowercase. Leave all other characters unchanged.

EXAMPLES
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
*/

function swapCase(string) {
  return string
    .split("")
    .map(char => {
      if (char === char.toLowerCase()) return char.toUpperCase();
      else if (char === char.toUpperCase()) return char.toLowerCase(); 
    })
    .join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));