/*
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
*/

function wordSizes(string) {
  if (string === '') return {};
  let counter = {};
  let wordsLength = string.split(' ').map(word => word.length);

  for (let index = 0; index < wordsLength.length; index += 1) {
    let wordLength = wordsLength[index];
    if (!counter[wordLength]) counter[wordLength] = 1;
    else counter[wordLength] += 1;
  }

  return counter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}