/*
PROBLEM
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Input: string
Output: object
Rule: count the words by size

EXAMPLES (see below)

DATA STRUCTURE

ALGORITHM
We create an empty object
We split the word following the spaces
We replace the words by their length
We count
*/

function wordSizes(string) {
	let count = {};
  if (string.length === 0) return count;
	
  string
	  .split(' ')
		.map(word => word.length)
		.forEach(length => count[length] ? count[length] += 1 : count[length] = 1);
	
		return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}