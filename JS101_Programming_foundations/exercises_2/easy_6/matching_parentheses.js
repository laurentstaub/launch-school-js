/*
PROBLEM
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Input: string
Ouput: boolean
Rule: Matching parenthese must start with '('

EXAMPLES (see below)

DATA STRUCTURE
string, array or object (stack)
opened = 1, opened can not go below 0

if we find an '(', we increment the count

ALGORITHM

*/
function isBalanced(string) {
  const punct = { paren: ['(', ')'], curly: ['{', '}'], square: ['[', ']']}
  const count = { paren: 0, curly: 0, square: 0 };
  
  const checkQuotes = string => {
    const quoteLength = quote => string.split('').filter(char => char === quote).length;
    return ((quoteLength('"') % 2 === 0) && (quoteLength("'") % 2 === 0));
  }

  const whichSign = char => {
    for (let key in count) {
      if (punct[key].includes(char)) return key;
    }
    return false;
  }

  if(!checkQuotes(string)) return false;

  string.split('').forEach(char => {
    let sign = whichSign(char);
    if (sign === false) return;
    if (count.paren < 0 || count.curly < 0 || count.square < 0) return false;
    if (punct[sign][0].includes(char)) count[sign] += 1;
    if (punct[sign][1].includes(char)) count[sign] -= 1;
  });

  return (count.paren === 0 && count.curly === 0 && count.square === 0);
}

console.log('Parentheses tests');
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

console.log('Curly tests');
console.log(isBalanced("What {is} this?") === true);
console.log(isBalanced("What {is this?") === false);
console.log(isBalanced("What }{") === false);
console.log(isBalanced("{{}}") === true);

console.log('Brackets tests');
console.log(isBalanced("What [is] this?") === true);
console.log(isBalanced("What [is this?") === false);
console.log(isBalanced("What ][") === false);
console.log(isBalanced("[[]]") === true);

console.log('Quotes');
console.log(isBalanced("W'h'a") === true);
console.log(isBalanced("Wh'") === false);
console.log(isBalanced("W''h'") === false);

console.log('Mixed tests');
console.log(isBalanced("What [is](){} this?") === true);
console.log(isBalanced("What [is](){") === false);