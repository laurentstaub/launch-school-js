/*
PROBLEM
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Input: string
Output: object

EXAMPLES
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

DATA STRUCTURE
Objects

ALGORITHM
  get the number of lowercase characters in the string
    for each character if the character is lowercase count + 1 to counter
  get the number of uppercase characters in the string
    for each character if the character is uppercase count + 1 to counter

  rest of characters = string.length - number lower - number upper
*/

function letterPercentages(string) {
  let percentages = {};
  let length = string.length;
  let countLower = 0;
  let countUpper = 0;
  let countOther = 0; 

  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      countLower += 1;
    } else if (char >= 'A' && char <= 'Z') {
      countUpper += 1;
    } else {
      countOther += 1;
    }
  });

  percentages['lowercase'] = (countLower / length * 100).toFixed(2);
  percentages['uppercase'] = (countUpper / length * 100).toFixed(2);
  percentages['neither'] = (countOther / length * 100).toFixed(2);

  return percentages;
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));