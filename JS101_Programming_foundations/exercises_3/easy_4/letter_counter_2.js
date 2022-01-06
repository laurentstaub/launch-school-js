/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.
*/

function wordSizes(string) {
  if (string === '') return {};
  string = string.replace(/[^a-zA-Z\s]/g, '');
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