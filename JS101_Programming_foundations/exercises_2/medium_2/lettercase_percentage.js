/*
PROBLEM
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Input: string
Output: object

ALGORITHM
Loop through each character
  check each character with a regex
    1/ if it is a character
      is it lower case ? If it is, increment lowercase, else increment uppercase
    2/ if not, increment neither

calculate the percentages
*/

function letterPercentages(string) {
  const toPercent = number => (number / string.length * 100).toFixed(2);
  let count = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach(char => {
    if (char.match(/[a-z]/)) count.lowercase += 1;
    else if (char.match(/[A-Z]/)) count.uppercase += 1;
    else count.neither += 1;
  });

  Object.keys(count).forEach(key => count[key] = toPercent(count[key]));

  return count;
}

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

