// Write a function that takes two strings as arguments, determines the length
// of the two strings, and then returns the result of concatenating the shorter
// string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

// EXAMPLES
//  shortLongShort('abc', 'defgh');    // "abcdefghabc"
//  shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
//  shortLongShort('', 'xyz');         // "xyz"

// PSEUDOCODE
//   we measure the length of the two strings
//   SET short to the shorter one
//   SET long to the longer one
//   PRINT shortlongshort

function shortLongShort(string1, string2) {
  let short;
  let long;
  if (string1.length <= string2.length) {
    short = string1;
    long = string2;
  } else {
    short = string2;
    long = string1;
  }

  console.log(short + long + short);

}

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh');
shortLongShort('', 'xyz');

// OFFICIAL SOLUTION
/*
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}
*/