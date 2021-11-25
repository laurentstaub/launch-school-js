/*
PROBLEM
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Input: string
Output: string
Rules: replace all non alphabetic charaters by a single space each time

EXAMPLES
cleanUp("---what's my +*& line?");    // " what s my line "

DATA STRUCTURE

ALGORITHM
we split the string into an array
we transform each element of the array to replace non 

function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ');
}

*/

function cleanUp(string) {
  const isLetter = char => {
    return char.toLowerCase() <= 'z' && char.toLowerCase() >= 'a' ? true : false;
  }
  let str = "";
  let lastStr = null;

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      str += string[i];
    } else if(str[str.length - 1] !== " ") {
      str += " ";
    }
  }

  return str;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "