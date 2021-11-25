/*
Write a function that will take a short line of text, and write it to the console log within a box.
*/

function logInBox(string) {
  console.log(`+-${'-'.repeat(string.length)}-+`);
  console.log(`| ${' '.repeat(string.length)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${' '.repeat(string.length)} |`);
  console.log(`+-${'-'.repeat(string.length)}-+`);
}

logInBox('');

/*
+--+
|  |
|  |
|  |
+--+
*/

logInBox('To boldly go where no one has gone before.');

/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/