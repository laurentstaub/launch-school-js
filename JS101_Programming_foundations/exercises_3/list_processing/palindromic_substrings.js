/*
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
*/

function leadingSubstrings(string) {
  return string.split('').reduce((acc, _, idx) => {
    acc.push(string.slice(0, idx + 1));
    return acc;
  }, []);
}

function substrings(string) {
  let result = [];
  for (let index = 0; index <= string.length; index += 1) {
    result.push(...leadingSubstrings(string.slice(index)));
  }

  return result;
}

function palindromes(string) {
  let allSubstrings = substrings(string);

  return allSubstrings.reduce((acc, val) => {
    let reverse = val.split('').reverse().join('');
    if (val === reverse && val.length > 1) acc.push(val);
    return acc;
  }, []);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]