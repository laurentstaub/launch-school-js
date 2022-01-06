/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Input: string
Output: object

function letterPercentages(string) {
  let counter = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach(char => {
    if (char.toUpperCase() === char.toLowerCase()) counter['neither'] += 1;
    else if(char === char.toLowerCase()) counter['lowercase'] += 1
    else counter['uppercase'] += 1;
  });

  for (let key in counter) {
    counter[key] = (counter[key] / string.length * 100).toFixed(2);
  }

  return counter;
}
*/

function letterPercentages(string) {
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / string.length) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / string.length) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / string.length) * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }