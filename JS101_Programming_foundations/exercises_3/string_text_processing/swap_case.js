/*
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/

function swapCase(string) {
  return string
    .split('')
    .map(char => {
      if (char === char.toLowerCase()) return char.toUpperCase();
      else return char.toLowerCase();
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"