/*
Write a function that will take a short line of text, and write it to the
console log within a box.

PROBLEM
-------
Input: string
output: formatted string

EXAMPLES
--------

logInBox('');

+--+
|  |
|  |
|  |
+--+

logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

console.log(`
+-${bars}-+
| ${text} |
+-${bars}-+
`);

*/

function logInBox(string) {
  console.log(
`+-${"-".repeat(string.length)}-+
| ${" ".repeat(string.length)} |
| ${string} |
| ${" ".repeat(string.length)} |
+-${"-".repeat(string.length)}-+`
  );
}

logInBox('To boldly go where no one has gone before.');

/*
function sliceString(string, maxWidth, lines = []) {
  if (string.length > maxWidth) {
    lines.push(string.slice(0, maxWidth));
    string = string.slice(maxWidth);
    sliceString(string, maxWidth, lines);
  } else {
    lines.push(string);
    string = string + " ".repeat(lines[0].length - string.length);
  }
  return lines;
}
*/

function sliceString(string, maxWidth) {
  let lines = [];
  while (string.length > maxWidth) {
    lines.push(string.slice(0, maxWidth));
    string = string.slice(maxWidth);
  }
  // we push the remaining string to the array, this is the last line
  lines.push(string);
  // we fill the last line with spaces it htere is more than one line
  if (lines.length > 1) {
    lines[lines.length - 1] += " ".repeat(lines[0].length - string.length);
  }
  return lines;
}

function logSlicedString(array) {
  let lineWidth = array[0].length;
  console.log(`+-${"-".repeat(lineWidth)}-+`);
  console.log(`| ${" ".repeat(lineWidth)} |`);
  array.forEach(textLine => {
    console.log(`| ${textLine} |`);
  });
  console.log(`| ${" ".repeat(lineWidth)} |`);
  console.log(`+-${"-".repeat(lineWidth)}-+`);
}

function logInLongBox(string, maxWidth = 70) {
  let  lines = sliceString(string, maxWidth);
  logSlicedString(lines);
}

logInLongBox('To boldly go where no one has gone before. To boldly go where no one has gone before.To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before.');
logInLongBox('To boldly go where no one has');
logInLongBox('');

function logInBoxOther(str, maxWidth = 80) {
  let words = [];
  while (str.length > maxWidth) {
    words.push(str.slice(0, maxWidth));
    str = str.slice(maxWidth);
  }
  if (str !== '') words.push(str);
  if (words.length === 0) words.push('');

  const BAR = `+-${'-'.repeat(words[0].length)}-+`;
  const BLANK = `|${" ".repeat(words[0].length + 2)}|`;

  console.log(BAR);
  console.log(BLANK);
  console.log(`| ${words.shift()} |`);
  words.forEach(line => console.log(`| ${line.padEnd(maxWidth, ' ')} |`));
  console.log(BLANK);
  console.log(BAR);
}

logInBoxOther('To boldly gone.Tfore.');
