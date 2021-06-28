// It should be a function
// It should take an array as argument and search its elements
// It should take a regex as second argument
// It should return an array with the matching elements

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(arrayOfWords, regex) {
  let arrayToReturn = [];
  arrayOfWords.forEach((word) => {
    if (regex.test(word)) {
      arrayToReturn.push(word);
    }
  });
  return arrayToReturn;
}

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}