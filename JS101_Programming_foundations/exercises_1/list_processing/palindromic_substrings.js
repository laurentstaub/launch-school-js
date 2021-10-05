/*
PROBLEM
=======
Write a function that returns a list of all palindromic substrings of a string.
That is, each substring must consist of a sequence of characters that reads the
same forward and backward. The substrings in the returned list should be sorted
by their order of appearance in the input string. Duplicate substrings should be
included multiple times.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

EXAMPLES
========
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/

function substrings(string) {
  let array = [];

  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    for (let endIndex = 1; endIndex <= string.length; endIndex += 1) {
      if (startIndex >= endIndex) continue;
      array.push(string.slice(startIndex, endIndex));
    }
  }

  return array;
}

function isPalindrome(substring) {
  return substring.length > 1 && substring === substring.split("").reverse().join("");
}
function palindromes(string) {
  return substrings(string).filter(isPalindrome);

}

console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));