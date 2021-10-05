/*
Write a function that takes a positive integer, n, as an argument and logs a
right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left
of the triangle, and the other end at the upper-right.


PROBLEM
-------
Input: number
Output: string of asterisks

Starting from the right, we build a triangle of n lines

EXAMPLES
--------
triangle(1);
*

triangle(2);
 *
**

triangle(5);

    *
   **
  ***
 ****
*****

DATA STRUCTURE
--------------
String manipulation

ALGORITHM
We start with an asterisk, width/length of the triangle is 1
Until we reach the number passed-in we will add 1 to the length of the triangle
  we add a space to all existing lines
  we add a line with only asterisks of the current length
We print the triangle


*/

function triangle(width) {
  let index = 0;
  while (index <= width) {
    console.log(' '.repeat(width - index) + '*'.repeat(index));
    index += 1;
  }
}

triangle(2);
triangle(5);
triangle(9);