/*
PROBLEM
-------
Matching Parentheses?
Write a function that takes a string as an argument and returns true if all
parentheses in the string are properly balanced, false otherwise. To be
properly balanced, parentheses must occur in matching '(' and ')' pairs.

Input: string
Output: boolean

EXAMPLES
--------
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

DATA STRUCTURE
--------------
A stack of "(" that needs to get to zero in length to return true

ALGORITHM
---------
we create a new array with all characters
we create an empty array to store the parenthesis
for each character in the array
  if there is a "(", we add it to the parenthesis array
  if there is a "(", we pop an element in the parenthesis array
if parenthesis array length is zero, we return true
else, we return false

CODE
----
*/

function isBalanced(string) {
  let characters = string.split("");
  let count = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (characters[index] === "(") {
      count += 1;
    } else if (characters[index] === ")") {
      count -= 1;
    }

    if (count === -1) return false;
  }

  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);