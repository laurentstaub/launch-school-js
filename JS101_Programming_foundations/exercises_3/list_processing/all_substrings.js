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

console.log(substrings('abcde'));
// return [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e" ]