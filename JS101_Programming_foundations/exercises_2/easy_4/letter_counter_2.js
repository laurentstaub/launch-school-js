function wordSizes(string) {
  string = string.replace(/[^a-z\s]/gi, '');
	let count = {};
  if (string.length === 0) return count;
	
  string
	  .split(' ')
    .map(word => word.length)
    .forEach(length => count[length] ? count[length] += 1 : count[length] = 1);
	
		return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}