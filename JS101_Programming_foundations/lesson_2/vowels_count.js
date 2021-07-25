/*
Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.


vowelCount('WhaTs yOur enneagram?');                  // [1, 2, 4]
vowelCount('Colonel Sanders feeds me well !!');       // [3, 2, 2, 1, 1, 0]
vowelCount('');                                       // []
vowelCount('ZoInkies!! There are monsters in here.'); // [4, 2, 2, 2, 1, 2]
vowelCount('grrr!');                                  // [0]

PEDAC - PRoblem Examples Data structure Algorithm Code

PROBLEM
- Input: String of one or more words
- What is word? -- group of characters separted by a white space

- Output: An array, elements are numbers. Numbers represent the count of the vowels of each word.

- Vowels: 'aeiouAEIOU'

- explicit requirements? Returned array should have same numbers elements as words. 


EXAMPLES
- `!!` is considered a word in the 2nd example.
- words can be a combination of letters and symbols 'abc' 'grr!'
- When given an empty string that contains no words, return and empty array.
- Can assume that words do not contain numbers.

DATA STRUCTURES
- input String
- output array of numbers
- another data structure convert String --> Array

ALGORITHM

We split the words and store them in a new array of words
We create a counting array to store the number of vowels in each word
For each word in the array of words
  We create a vowel count variable
  For each string of each word
    If the string is "aeiouAEIOU"
      We add it to the vowel count variable
  We push the vowel count to the counting array
We return the counting array

Mandy
- Convert the input string of words into an array of words.
    - Split the string by spaces to extract each word into the array. 
- Convert the array of words into a new array of numbers.
- Iterate over each word in the array of words and count the number of vowels for each word, using the `numOfVowels(word)` helper function. 

    - Create a helper function for the sub-problem of counting  the number of vowels in a word. `numOfVowels` function:
        - Given a single word.
        - Initialize a variable `count` to store the count.
        - Iterate over each character of the word.
        - If the character is one of `a` `e` `i` `o` `u` , - increment `count`. 
        - After iteration is complete, return `count`.

- Return the newly created array of numbers (number of vowels). 

*/

//1
// Create a `greatestProduct` function that finds the greatest product
//of five consecutive digits in a given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

console.log(greatestProduct("123834539327238239583")); // 3240
console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
console.log(greatestProduct("02494037820244202221011110532909999")); // 0

//2
// Given a string split it into as few strings as possible such
// that each substring is a palindrome.


splitIntoPalindromes("racecarannakayak"); // ["racecar", "anna", "kayak"];
splitIntoPalindromes("abc"); // ["a", "b", "c"]
splitIntoPalindromes("yobananaboy"); // ["yobananaboy"]

//3
//Write a function that removes every other element from an array

console.log(removeEveryOther([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(removeEveryOther([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(removeEveryOther([])); // []
console.log(removeEveryOther([1])); // [1]
console.log(removeEveryOther([1, 2])); // [1]


let firstName = "John";

const getName = name => {
  name.concat(" Doe");
  name = name.toLowerCase();
  return name;
}

console.log(getName(firstName));
console.log(firstName);