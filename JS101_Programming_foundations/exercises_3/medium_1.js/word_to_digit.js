/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

function wordToDigit(string) {
  let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let punctuation = "!.?:"

  let words = string.split(' ');
  return words
    .map(word => {
      if (punctuation.includes(word[word.length - 1])) {
        let shortWord = word.slice(0, word.length - 1);
        let punct = word[word.length - 1];

        if (digits.includes(shortWord)) {
          return digits.indexOf(shortWord) + punct;
        }
      }
      if (digits.includes(word)) return digits.indexOf(word);
      else return word;
    })
    .join(' ');
}

*/

function wordToDigit(string) {
  let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  digits.forEach(digit => {
    let regex = new RegExp('\\b' + digit + '\\b', 'g');
    string = string.replace(regex, digits.indexOf(digit));
  });

  return string
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Please call me at five four three, then done. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."