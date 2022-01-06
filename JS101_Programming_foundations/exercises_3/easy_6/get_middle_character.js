/*
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.
*/

function centerOf(string) {
  let mid = Math.floor(string.length / 2);
  if (string.length === 1) return string;
  if (string.length % 2 !== 0) return string[mid];
  else return string.slice(mid - 1, mid + 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"