/*
Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

Input: array
Output: array
*/

function alphabeticNumberSort(array) {
  let alphaNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thriteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  
  return [...array].sort((a, b) => {
    if (alphaNumbers[a] < alphaNumbers[b]) return -1;
    else if (alphaNumbers[a] > alphaNumbers[b]) return 1;
    else return 0;
  });
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]