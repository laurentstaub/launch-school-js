/*
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Input: string
Output: string
Rule: if word is of length 5 or more, reverse it
*/

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.length >= 5 ?
      word.split('').reverse().join('') :
      word
    )
    .join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"