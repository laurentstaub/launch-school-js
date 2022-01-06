/*
Max Sequence

PROBLEM
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
-- should be 6: [4, -1, 2, 1]

The easy case is when the array is made up of only positive numbers and
the maximum sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0 instead.

Empty array is considered to have zero greatest sum.
Note that the empty array is also a valid argument array.

Input: array (of numbers)
Output: number (largest sum)
Rules: if only positive numbers, return the sum
       if only negative numbers, return 0
       if empty array, return 0
       max subsequence

EXAMPLES / TEST CASES

ALGORITHM
Declare a variable that will hold the array of substrings
We create an array of all the substrings
  - starting from a different index everytime
    - cut the array at a different length
We calculate the sum of all these subtrings
We return the largest one

*/

function maxSequence(array) {
  const allSubstrings = array => {
    let result = [];

    for (let index = 0; index < array.length; index += 1) {
      for (index2 = index + 1; index2 <= array.length; index2 += 1) {
        result.push(array.slice(index, index2));
      }
    }

    return result;
  }

  if (array.length === 0) return 0;
  else if (array.every(nb => nb < 0)) return 0;
  else if (array.every(nb => nb > 0)) {
    return array.reduce((acc, nb) => acc + nb, 0);
  }
  else {
    let substrings = allSubstrings(array);
    let totals = substrings.map(subArray => subArray.reduce((acc, nb) => acc + nb, 0));
    return Math.max(...totals);
  }
}

console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-32, -7]) === 0); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([11, 7]) === 18); // true
console.log(maxSequence([4, -1, 2, -5]) === 5); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true