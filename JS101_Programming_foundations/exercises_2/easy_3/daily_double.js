/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
*/

function crunch(string) {
  let charArray = string.split('');
  let singleChars = [charArray[0]];

  for (let index = 1; index < charArray.length; index += 1) {
    if(charArray[index] !== charArray[index - 1]) singleChars.push(charArray[index]);
  }

  return singleChars.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""