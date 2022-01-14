/* 
Count the length of all the contiguous consonants of a string. A single consonant is a contiguous string of length 1.
Return an object that holds the count value as key and all the strings of that length as an array.

PROBLEM
- input: string
- output: object with count value as key and array of strings of that length as an array

- Rules
  - return contiguous consonants from a string
  - a single consonant does count
  - ignore case


ALGORITHM
Strategy
We need 2 things
  - the keys
  - then once we have the keys

Get an array of only the consonants 

let consonants = "bcdfghjklmnpqrstvwxyz";

Replace all the non consonants by a single space
*/

function consonantsLength(string) {
  let result = {};

  if ( string === undefined ) return null;
  string = string.replace(/[^bcdfghjklmnpqrstvwxyz]+/gi, " ");
  let charsArray = string.split(" ").filter(chars => chars.length !==0 );
  
  charsArray.forEach(chars => {
    if (!result[chars.length]) result[chars.length] = [chars];
    else result[chars.length].push(chars);
  })

  return result;
}

console.log(consonantsLength()); // null
console.log(consonantsLength("")); // {}
console.log(consonantsLength("a")); // {}
console.log(consonantsLength("b")); // { 1: "b" }
console.log(consonantsLength("flying")); // { 2:[ "ng" ], 3: [ "fly" ] };
console.log(consonantsLength("banana")); // { 1:[ "b", "n", "n" ] }
console.log(consonantsLength("It's Mario's party ")); 
// { 1: [ "t", "s", "M", "r", "s", "p" ], 3: [ "rty" ] }