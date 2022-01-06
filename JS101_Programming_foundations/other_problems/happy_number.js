/* Leetcode 202
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Input: number
Output: boolean

Example of 2
2 => 4 => 16 => 37 => 58 => 89 => 145 => 42 => 20 => 4

Example of 4
4 => 16 => 37 => 58 => 89 => 145 => 42 => 20 => 4

Example of 7
7 => 49 => 97 => 130 => 10 => 1

Example of 44
44 => 32 => 13 => 10 => 1

Example of 117
116 => 38 => 73 => "58" => 89 => 145 => 42 => 20 => 4 => 16 => 37 => "58"
Once 58 gets repeated, we know we are in a loop

Cases:
  - It eventually gets to 1
  - It gets stuck in a cycle
  - It gets higher and higher, up to infinity? (No it can't happen)

  ALGORITHM
  Block 1: calculate the sum of squares
    split the number into its digits
    sum the squares of the digits
  Block 2: find if we are in a loop
    everytime we go through a square of digits
      if it is 1 => return true
      if it is not in the hastSet, add it to the hashSet
      if it is in the hashSet, return false
    
*/

const isHappy = function(nb) {
  let hashSet = [];

  while (true) {
    let square = String(nb).split('').reduce((acc, digit) => acc + digit ** 2, 0);

    if (square === 1) return true;
    if (hashSet.includes(square)) return false;
    hashSet.push(square);
    nb = square;
  }
  
};

console.log(isHappy(4)); // false
console.log(isHappy(7)); // true
console.log(isHappy(44)); // true