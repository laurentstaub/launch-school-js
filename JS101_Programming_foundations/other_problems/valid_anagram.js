/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

PROBLEM
Find if the second string is an anagram of the first one
Input: 2 strings
Ouput: true or false
Rules

ALRGORITHM
Approach 1: check all substrings (nested loop)
Approach 2: count the letters and check if counts are the same

*/

function validAnagram(string1, string2) {
  const count = string => {
    let counter = {};

    string.split('').forEach(letter => {
      if (!counter[letter]) counter[letter] = 1;
      else counter[letter] += 1;
    });

    return counter;
  }

  let counter1 = count(string1);
  let counter2 = count(string2);

  for (let letter in counter1) {
    if (counter1[letter] !== counter2[letter]) return false;
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true