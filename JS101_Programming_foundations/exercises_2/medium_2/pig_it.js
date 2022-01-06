/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

PROBLEM
*/

function pigIt(words) {
  return words.split(' ')
    .map(word => {
      if ("!.;,?".includes(word)) return word;
      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');
}

console.log(pigIt('latin')); // atinlay
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !