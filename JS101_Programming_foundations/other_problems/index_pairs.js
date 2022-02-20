/** Leetcode 1065. Index Pairs of a String
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 
find all occurences
sort them

for each word, look for the word and get their index of occurence

declare an array desult and assign it to an empty array

for each word, iterate over each letter of the string
  declare a variable startIndex to store the startIndex
  
  if letter is the same in the word and string and startIndex is undefined
    store start index
  if letter is the same as the word nth letter
    add a letter to reconstructedWord
  if letter is different
    reset startIndex to null
    break the loop and get to the next letter

  if length of the 
"abc", "bc" => [[1, 2]]
*/

var indexPairs = function(string, words) {
  let result = [];
    
  words.forEach(word => { // "a"
    let lastSearchedIndex = 0;
    let index = 0;
    let reconstructedWord = '';
    let startIndex = null;

    while(index <= string.length) {  // 0 < 1
      if (string[index] === word[0] && startIndex === null) {  // 'b'
        startIndex = index;
        reconstructedWord += string[index];
      } else if (string[index] === word[reconstructedWord.length] && startIndex !== null) {
        reconstructedWord += string[index];
      } else {
        reconstructedWord = '';
        startIndex = null;
        index = lastSearchedIndex;
        lastSearchedIndex += 1;
      }
      
      if (reconstructedWord.length === word.length) {
        result.push([startIndex, startIndex + word.length - 1]);
        reconstructedWord = '';
        startIndex = null;
        index = lastSearchedIndex;
        lastSearchedIndex += 1;
      }

      index += 1;
    }
  });

  return result.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    }
  );
};

console.log(indexPairs("thestoryofleetcodeandme", ["story","fleet","leetcode"])) // [[3,7],[9,13],[10,17]]
console.log(indexPairs("ababa", ["aba","ab"])); // [[0,1],[0,2],[2,3],[2,4]]
console.log(indexPairs("baabaaaaaa", ["b","a","ba","bb","aa"]));
