/*
Write a function that will take a short line of text, and write it to the console log within a box.

Input: string
Output: string

Algorithm
There will always be a fixed part
  +-string length
  | string length
  | string
  | string length
  +-string length
*/

function logInBox(string) {
  let len = string.length;

  console.log(`
+-${'-'.repeat(len)}-+
| ${' '.repeat(len)} |
| ${string} |
| ${' '.repeat(len)} |
+-${'-'.repeat(len)}-+`);
}

logInBox('To boldly go where no one has gone before.');
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

logInBox('');
/*
+--+
|  |
|  |
|  |
+--+
*/