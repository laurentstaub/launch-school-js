/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:
 - Open brackets must be closed by the same type of brackets.
 - Open brackets must be closed in the correct order.

Input: string
Output: boolean

APPROACH 1: use a stack
We can always open a parenthese
But, we must always pop the latest opened parenthese when closing

Store parentheses
{ opening: '({]', closing: ')}]' }

Stack
string: '([' => add: concat / +   remove => slice(0, array.length - 1)
array: [ '(', '[' ] => add: push  remove: pop

ALGORITHM
iterate over the string
  if the char is an opening character, add it to the stack
  if the char is a closing character
    if it matches the last character in the stack, remove it from the stack
      indexOf char in closing matches indexOf last stack element
    if it doesn't, return false
*/

function isValid(string) {
  const parens = { opening: '({[', closing: ')}]' };
  let stack = [];

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (parens['opening'].includes(char)) stack.push(char);
    
    else if (parens['closing'].includes(char)) {
      let closingIndex = parens['closing'].indexOf(char);
      let openingIndex = parens['opening'].indexOf(stack[stack.length - 1]);

      if (closingIndex === openingIndex) stack.pop();
      else return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid('()')); // true
console.log(isValid('(){}[]')); // true
console.log(isValid('(]')); // false
console.log(isValid('((])')); // false
console.log(isValid('([])')); // true