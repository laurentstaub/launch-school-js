/*
PROBLEM
-------
Write a function that takes a string argument containing one or more words and
returns a new string containing the words from the string argument. 

All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. Words will be
separated by a single space.

Input: string
Output: string (of reversed word if length is 5 or more)

EXAMPLES
--------
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

DATA STRUCTURE
--------------
strings and arrays

ALGORITHM
---------
break down the string to an array of words
for each word in the array
  if the length of the word is 5 or more
    split the letters to a new array  
    reverse the letter in the array
    join the letters of the array
join the words with a space in between words
return array

CODE
----
*/

function reverseWords(words) {
  const LENGTH_FOR_REVERSAL = 5;
  let wordsArray = words.split(" ");

  let reversedWordsArray = wordsArray.map(word => {
    if (word.length >= LENGTH_FOR_REVERSAL) {
      return word
        .split("")
        .reverse()
        .join("");
    } else {
      return word;
    }
  });

  return reversedWordsArray.join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"