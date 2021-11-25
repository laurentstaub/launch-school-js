/*
PROBLEM
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Input: number
Output: string
Rules: takes a positive integer as argument
       right angle on the right

EXAMPLES
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

ALGORITHM
create a function triangle

loop from 1 to number
  create a variable that will ne initialized to a string with i * and padded
    with empty strings to get to the length
  we print this string
  we add reassign the string to with one more '*' and pad it

*/

function triangle(number) {
  for (let i = 1; i <= number; i += 1) {
    console.log(`${' '.repeat(number - i)}${'*'.repeat(i)}`);
  }
}

triangle(9);