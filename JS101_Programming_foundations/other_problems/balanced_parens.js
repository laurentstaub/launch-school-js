/*
Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Input: number
Output: string
Rules: parenthesis must be opened first

ALGORITHM
we need to keep track of the opened parentheses with a counter that can never
be below 0

()()()   1 -1 -1  1 -1  1
(())()  -1 -1  1  1 -1  1
()(())  010011
(()())  001011
((()))  000111

get all the substrings and filter out the ones for which the running sum goes
below 0

filter conditions:
  - same number of 1 and zeroes
  - if the running sum goes below 0, out


function balancedParens(nb) {
  if (nb === 0) return [''];
  if (nb === 1) return ['()'];

  const checkSum = string => {
    let sum = 0;

    for (let index = 0; index < string.length; index += 1) {
      if (string[index] === '0') {
        sum += 1;
      }

      if (string[index] === '1') {
        sum -= 1;
      }

      if (sum < 0) return false
    }

    return sum === 0;
  }

  let combinations = [];
  let maxDecimal = parseInt('1'.repeat(nb * 2), 2);

  for (let index = 0; index <= maxDecimal; index += 1) {
    let pairs = index.toString(2).padStart((nb * 2), '0');
    if (checkSum(pairs)) combinations.push(pairs);
  }
  
  return combinations;
}
*/

function balancedParens(n) {
  const result = [];

  const generateSets = (leftParens, rightParens, partialSet) => {
    if (leftParens > rightParens) return;
    if (leftParens + rightParens === 0) result.push(partialSet);
    if (leftParens > 0) generateSets(leftParens - 1, rightParens, partialSet + '(');
    if (rightParens > 0) generateSets(leftParens, rightParens - 1, partialSet + ')');
  }

  generateSets(n, n, '');
  return result;
}

console.log(balancedParens(0)) // [""]
console.log(balancedParens(1)) // ["()"]
console.log(balancedParens(2)) // ["()()","(())"]
console.log(balancedParens(3)) // ["()()()","(())()","()(())","(()())","((()))"]
console.log(balancedParens(10))
console.log(balancedParens(11))