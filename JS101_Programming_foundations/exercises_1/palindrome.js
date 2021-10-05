/*

Instructions

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 


P

- inputs:
> num starting number
> s the number of numerical palindroms we want


- output:
> an array of numbers (numerical palindroms)


- rules:
> what is a palindrom?
- a number that reads the same backward as forward
- single digit numbers are not palindroms

> if num is a palindrom, it should be included in the return array
> the returned palindroms are greater than or equal to num
> if num or s is not a number, or if it's less than 0, then we return "Not valid"
> if s is 0, we return an empty array


D

- inputs:
> num starting number - 0 or greater
> s the number of numerical palindroms we want - 0 or greater


- output:
> an array of numbers (numerical palindroms)


- intermediary steps:
> array of numbers
> converting numbers into strings for palindrom checks


A

we define a function named isPalindrome that will return a Boolean: true if the passed in argument(number) is a palindrome, false is not.
  if the number length is 1, the number is not a palindrome
  if the number is the same as its reverse, then it is a palindrome

we define a function palindrome that will take 2 arguments: number and s
  if number are less than 0 or are not numbers, return "not valid"
  we define an empty array
  we define a counterPalindrome and assign to it a value of 0
  
  while counterPalindrome is less than s and s is more than 0
    we call isPalindrome on number
      if it is true
        we add number to the array
        we add 1 to number
        we add 1 to counterPalindrome
      if not
        we add 1 to number

 we return the array

console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"

*/