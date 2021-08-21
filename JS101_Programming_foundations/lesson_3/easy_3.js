// Question 1
// Write three different ways to remove all of the elements from the following
// array:


let numbers = [1, 2, 3, 4];

numbers.slice(0, 0);
numbers.splice(0, numbers.length);
numbers.length = 0;


// Question 2
// What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// 1,2,34,5

// In some languages you can use + to concatenate two arrays, but not in
// JavaScript. In JavaScript, the + operator first converts the arrays to
// strings, and then concatenates the strings, so the output is the string
// 1,2,34,5.


// Question 3
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);


// Question 4
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// The output will be:

[ { first: 42 }, { second: "value2" }, 3, 4, 5 ]

// Internally, arr1 looks something like this after line 1 runs:

// +---------+             +---------------------+
// | pointer | ----------> | { first: "value1" } |
// +---------+             +---------------------+
// | pointer | -----+
// +---------+      |
// |    3    |      |      +----------------------+
// +---------+      +----> | { second: "value2" } |
// |    4    |             +----------------------+
// +---------+
// |    5    |
// +---------+


// Notice that the first two elements of the array are pointers to objects that appear somewhere in the computer's memory. The values of those objects are not stored in the array. (Since arrays are objects, this applies to elements with array values too.) However, the primitive values are stored directly in the array.

// There are two kinds of copy operations when working with objects and arrays: a deep copy and a shallow copy.

// A deep copy makes a duplicate of every item in an existing array or object. In particular, it creates completely new instances of any subarrays or subobjects in the source object. If we performed a deep copy on arr1, we would have two different arrays as well as four separate objects.

// A shallow copy only makes a duplicate of the outermost values in an array or object. If we perform a shallow copy on arr1, we end up with two different arrays, but we still only have one occurrence each of { first: 42 } and { second: 'value2' }. In this case, both arr1[0] and arr2[0] point to the same object in memory. Likewise, arr1[1] and arr2[1] point to the { second: 'value2' } object.

// The slice method performs shallow copies. Thus, when we call arr1.slice(), we end up with something like this:

// arr1                                                       arr2
// +---------+             +---------------------+              +---------+
// | pointer | ----------> | { first: "value1" } | <----------- | pointer |
// +---------+             +---------------------+              +---------+
// | pointer | -----+                                    +----- | pointer |
// +---------+      |                                    |      +---------+
// |    3    |      |      +----------------------+      |      |    3    |
// +---------+      +----> | { second: "value2" } | <----+      +---------+
// |    4    |             +----------------------+             |    4    |
// +---------+                                                  +---------+
// |    5    |                                                  |    5    |
// +---------+                                                  +---------+

// arr1[0] and arr2[0] point to the same object, { first: "value1" }. Thus, when we replace the value of the first property by using arr2[0].first, the change shows up in arr1 as well. In the end, we get the following results:

// arr1                                                       arr2
// +---------+             +---------------------+              +---------+
// | pointer | ----------> |    { first: 42 }    | <----------- | pointer |
// +---------+             +---------------------+              +---------+
// | pointer | -----+                                    +----- | pointer |
// +---------+      |                                    |      +---------+
// |    3    |      |      +----------------------+      |      |    3    |
// +---------+      +----> | { second: "value2" } | <----+      +---------+
// |    4    |             +----------------------+             |    4    |
// +---------+                                                  +---------+
// |    5    |                                                  |    5    |
// +---------+                                                  +---------+

// Question 5

// The following function unnecessarily uses two return statements to return
// boolean values. Can you rewrite this function so it only has one return
// statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
  return color === "blue" || color === "green";
}

function isColorValid(color) {
  return color === "blue" || color === "green" ? true : false;
}

const isColorValid = color => ["blue", "green"].includes(color);