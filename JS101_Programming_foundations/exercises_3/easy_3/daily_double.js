/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Input: string
Output: string

Approach: if the character is the same as the previous one, we filter it out
*/

function crunch(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === string[index - 1]) continue;
    result += string[index];
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""