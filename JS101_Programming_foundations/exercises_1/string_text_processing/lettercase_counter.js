/*
PROBLEM
Write a function that takes a string and returns an object containing three
properties: one representing the number of characters in the string that are
lowercase letters, one representing the number of characters that are uppercase
letters, and one representing the number of characters that are neither.

EXAMPLES
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
*/

function letterCaseCount(string) {
  let counter = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach(char => {
    if (char.toLowerCase() === char.toUpperCase()) counter.neither += 1;
    else if (char === char.toUpperCase()) counter.uppercase += 1;
    else if (char === char.toLowerCase()) counter.lowercase += 1;
  });

  return counter;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));