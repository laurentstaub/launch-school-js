/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

PROBLEM
Input: string
Ouput: string (high number low number)

ALGORITHM
declare a variable to store the min value initialized to the first value
declare a variable to store the max value initialized to the first value

slice the strings to get the numbers in an array
iterate over this array
  if current value < min, replace min with value
  if current value > max, replace max with value

return a string with the 2 values

*/

function highAndLow(string) {
  let array = string.split(' ');
  let min = array[0];
  let max = array[0];

  string.split(' ').forEach(number => {
    if (Number(number) < min) min = number;
    if (Number(number) > max) max = number;
  });

  return max + ' ' + min;
}

console.log(highAndLow("1 2 3"));  // return "3 1"
console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
