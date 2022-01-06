/*
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
*/

function getGrade(nb1, nb2, nb3) {
  let average = (nb1 + nb2 + nb3) / 3;

  if (0 <= average && average < 60) return 'F';
  if (60 <= average && average < 70) return 'D';
  if (70 <= average && average < 80) return 'C';
  if (80 <= average && average < 90) return 'B';
  if (90 <= average && average < 100) return 'A';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"