/*
ALGORITHM
Double only if consonant = exclude vowels and all the rest
/b-df-hj-np-tvz/
*/

function doubleConsonants(string) {
  return string
    .split('')
    .map(char => {
      if (char.match(/[b-df-hj-np-tv-z]/i)) return char + char;
      return char;
    })
    .join('');
}

console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");