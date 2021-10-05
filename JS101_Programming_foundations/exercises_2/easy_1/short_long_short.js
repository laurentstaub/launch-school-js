function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1.concat(string2, string1);
  } else {
    return string2.concat(string1, string2);
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));