/*
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
*/

function triangle(nb) {
  let stars = 1;

  while (stars <= nb) {
    let spaces = nb - stars;
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    stars += 1;
  }
}

triangle(5);
/*
    *
   **
  ***
 ****
*****
*/

triangle(9);
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/