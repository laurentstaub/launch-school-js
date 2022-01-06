/*
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Input: string
Output: string

Rule: 
  - return alternate case on each char

Algorithm
loop through the string
  if index is even, return the uppercase version of the char
  if index is odd, return the lowercase version of the char

return the string
*/

function staggeredCase(string) {
  return string
	  .split('')
		.map((char, index) => {
      if (index % 2 === 0) return char.toUpperCase();
		  else return char.toLowerCase();
	  })
		.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"