/*
Write a function scramble(str1, str2) that returns true if a portion of a str1
characters can be rearranged to match str2, otherwise return false

Input: 2 strings
Output: true or false

Approach 1: counter
we count the letters in the first string
we count the letters in the second string

for each letter in the second string, if the count in the first string is
< than the count in the second string, return false
else return true
*/

function scramble(str1, str2) {
  const countChars = str => {
    let counter = {};
    str.split('').forEach(char => {
      if (!counter[char]) counter[char] = 1;
      else counter[char] += 1;
    });
    return counter;
  }

  let counter1 = countChars(str1);
  let counter2 = countChars(str2);

  for (let letter in counter2) {
    if (counter2[letter] > counter1[letter] || !counter1[letter]) return false;
  }

  return true
}

console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedeodewwarrrs', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);