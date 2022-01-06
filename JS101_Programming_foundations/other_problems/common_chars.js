/* Launchschool video 2
Given an array of strings made only from lowercase letters, return an array of
all characters that show up in all strings within the given array (including
duplicates). If a character occurs 3 times in all strings, you need to include
it 3 times in the answer 

Input: array of words
Output: array of letters

Approach 1: counters
{'a': 1, 'b': 1} {'b': 2, 'c': 1}

compare the word counter to the previous word counter, each time, keep the 
minimum for each present letter

Approach 2: sort characters and find the common ones
abella
abell
ellor


function commonChars(array) {
  const getCount = string => {
    let counter = {};

    string.split('').forEach(char => {
      if (!counter[char]) counter[char] = 1;
      else counter[char] += 1;
    });

    return counter;
  }
  
  let commonCount = getCount(array[0]);
  
  for (let index = 1; index < array.length; index += 1) {
    let tempCount = {};
    let lettersCount = getCount(array[index]);

    for (letter in lettersCount) {
      if (!commonCount[letter]) continue;
      else tempCount[letter] = Math.min(lettersCount[letter], commonCount[letter]);
    }

    commonCount = tempCount;
  }

  let result = [];

  for (letter in commonCount) {
    while (commonCount[letter] > 0) {
      result.push(letter);
      commonCount[letter] -= 1;
    }
  }

  return result;
}

function commonChars(words) {
  let result = [];

  for (let idx = 0; idx < words[0].length; idx += 1) {
    let char = words[0][idx];
    if (words.every(element => element.includes(char))) result.push(char);

    for (let jdx = 1; jdx < words.length; jdx += 1) {
      words[jdx].replace(char, '');
    }
  }

  return result;
}
*/

function commonChars(array) {
  let result = [];
  let iterateString = array[0]
  let otherStrings = array.slice(1);

  for (let index = 0; index < iterateString.length; index += 1) {
    let char = iterateString[index];

    if (otherStrings.every(string => string.includes(char))) {
      result.push(char);
      otherStrings = otherStrings.map(string => string.replace(char, ''));
    }
  }

  return result;
}

console.log(commonChars(['a', 'b']));  // []
console.log(commonChars(['ab', 'bbc']));  // ['b']
console.log(commonChars(['bella', 'label', 'roller']));  // ['e', 'l', 'l']
