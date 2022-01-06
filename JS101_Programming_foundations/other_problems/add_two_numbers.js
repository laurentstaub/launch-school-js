/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

const addTwoNumbers = function(l1, l2) {
  if (!Array.isArray(l1) || !Array.isArray(l2)) return null;
  let number1 = Number(l1.reverse().join(''));
  let number2 = Number(l2.reverse().join(''));

  let result = number1 + number2;
  console.log(String(result).split('').reverse());
  return String(result).split('').reverse();
};

console.log(addTwoNumbers("", ""))
console.log(addTwoNumbers([0], [0])); //
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]