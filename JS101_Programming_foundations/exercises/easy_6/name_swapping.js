/*
PROBLEM
-------
Name Swapping
Write a function that takes a string argument consisting of a first name, a
space, and a last name, and returns a new string consisting of the last name,
a comma, a space, and the first name.

Input: string    "FirstName LastName"
Output: string   "LastName, FristName"

EXAMPLES
--------
swapName('Joe Roberts');    // "Roberts, Joe"

CODE
----

OFFICIAL SOLUTION
-----------------
function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

*/

function swapName(string) {
  let stringArray = string.split(" ");
  let lastName = stringArray.pop();
  return `${lastName}, ${stringArray.join(" ")}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));
// "Ragvals, Karl Oskar Henriksson"