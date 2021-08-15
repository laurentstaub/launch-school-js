/*

PROBLEM
-------
Write a function that takes a string consisting of zero or more space separated
words and returns an object that shows the number of words of different sizes.

Input: string
Output: object with string numbers as keys

EXAMPLES
--------
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
'Four'
'score'
'and'
'seven.'
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            
DATA STRUCTURE
--------------
strings
arrays
Objects

ALGORITHM
---------
we split the string at the space to an array
we count the number of characters for each element of the array

[4, 5, 3, 6] => {"4": 1}
for each element in the array
  we add a key equal to the element to the object and initialize counter to 1
  we add 1 to the corresponding key

return the object

*/
function wordSizes(string) {
  let returnedObject = {};
  let numbersArray = string
    .split(" ")
    .map(string => string.replace(/[^a-z0-9]/gi, ""))
    .map(string => string.length);

  if (numbersArray.length === 1 && numbersArray[0] === 0) return returnedObject;
  
  numbersArray.forEach(element => {
    if (Object.keys(returnedObject).includes(String(element))) {
      returnedObject[element] += 1;
    } else {
      returnedObject[element] = 1;
    }
  });

  return returnedObject;
}

console.log(wordSizes('Four score and seven.'));         
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  
console.log(wordSizes("What's up doc?"));                              
console.log(wordSizes(''));                                            