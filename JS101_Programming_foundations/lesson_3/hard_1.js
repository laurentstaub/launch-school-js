// Question 1
// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// Try to answer without running the code or looking at the solution.

/*
These functions do not return the same thing. The function first() returns the expected value of { prop1: "hi there" }, but second() returns undefined without throwing any errors.

The reason for this odd behavior is that semicolons, in JavaScript, are technically optional. However, when you omit them, the JavaScript engine inserts them where it thinks you need them. In second, it inserts a semicolon after the word return, so the function returns undefined. No errors are thrown since the rest of the code is valid, even though it never gets executed.

Some developers rely on this behavior and write JavaScript code without semicolons. However, most developers consider it poor practice since you're relying on the engine to make decisions for you, and those decisions may not be what you intended.
*/


// Question 2
// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Try to answer without running the code or looking at the solution.

{ first: [ 1, 2 ] }

// Since numArray is a reference to the original array, [1], numArray.push(2)
// modifies this array. Thus, the original object referenced by object is
// changed. If, instead of modifying the original object, we want to modify
// numArray but not object, we have two options:
let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);


// Question 3
// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


"one is: one"
"two is: two"
"three is: three"


"one is: one"
"two is: two"
"three is: three"


"one is: two"
"two is: three"
"three is: one"


// Question 4
// Ben was tasked to write a simple JavaScript function to determine whether an
// input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11.
// He is not familiar with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber. It determines
// whether a string is a numeric string between 0 and 255 as required for IP
// numbers and asked Ben to use it. Here's the code that Ben wrote:

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

// Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few
// things. You're not returning a false condition, and you're not handling the
// case when the input string has more or less than 4 components, e.g., 4.5.5 or
// 1.2.3.4.5: both those values should be invalid."

// Help Ben fix his code.

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) return false;
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}