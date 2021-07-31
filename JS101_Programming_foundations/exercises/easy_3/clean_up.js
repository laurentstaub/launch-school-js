/*
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces. If one or more non-alphabetic
characters occur in a row, you should only have one space in the result (i.e.,
the result string should never have consecutive spaces).

EXAMPLES
--------
cleanUp("---what's my +*& line?");    // " what s my line "

function cleanUp(string) {
  let newString = "";

  for (let index = 0; index < string.length; index += 1) {
    if (isLetter(string[index])) {
      newString += string[index];
    } else if (newString[newString.length - 1] !== " ") {
      newString += " ";
    }
  }
  return newString;
}

function isLetter(character) {
  if ((character.charCodeAt() >= 65 &&
       character.charCodeAt() <= 90) ||
       (character.charCodeAt() >= 97 &&
       character.charCodeAt() <= 122)
  ) {
    return true;
  }
  return false;
}


function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, " ");
}

*/
function cleanUp(string) {
  let newString = "";

  for (let index = 0; index < string.length; index += 1) {
    if (isLetter(string[index])) {
      newString += string[index];
    } else if (newString[newString.length - 1] !== " ") {
      newString += " ";
    }
  }
  return newString;
}

function isLetter(character) {
  return character.match(/[a-z]+/gi);
}

console.log(cleanUp("---what's my +*` line?"));    // " what s my line "