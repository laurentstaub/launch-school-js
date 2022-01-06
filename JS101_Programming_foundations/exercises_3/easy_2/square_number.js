/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
*/

function multiply(nb1, nb2) {
  return nb1 * nb2;
}

function square(nb) {
  return multiply(nb, nb);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true