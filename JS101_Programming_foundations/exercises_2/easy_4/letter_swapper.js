const swapLetters = word => {
  if (word.length <= 1) return word;
  return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
}

const swap = string => {
  return string
    .split(' ')
    .map(word => swapLetters(word))
    .join(' ');
}

console.log(swapLetters('a'));
console.log(swapLetters('word'));
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"