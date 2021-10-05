/*
Leap Years (Part 1)
In the modern era under the Gregorian Calendar, leap years occur in every year
that is evenly divisible by 4, unless the year is also divisible by 100. 
If the year is evenly divisible by 100, then it is not a leap year, 
unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function 
that takes any year greater than 0 as input and returns true if the year is 
a leap year, or false if it is not a leap year.

Leap Years (Part 2)
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap
year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar,
leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to
determine leap years both before and after 1752.

PROBLEM
=======
Input:
  * A number (integer)

Intermediary:
  * Monthly interest rate
  * Loan duration in months

Output:
  * Boolean (true or false)

Rules:
  * leap year when every year divisible by 4 (=> true)
  * except when year is divisible by 100 (=> false)
  * but if it is divisible by 400, it is a leap year (=> true)
  * before 1752, leap year is every year divisible by 4 (=>true)

EXAMPLES
========
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

DATA STRUCTURE
==============
Input: numbers
Output: Boolean

ALGORITHM
=========

if before 1752
  if we can divide by 4, return true
else
if we can divide the passed in integer by 400, return true
else IF we can divide the passed in integer by 100, retrun return false
else IF we can divide the integer by 4, return true
else return false

CODE
====
*/
function isLeapYear(year) {
  const yearGregorian = 1752;

  if(year < yearGregorian) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true


/*
FURTHER EXPLORATION
===================
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
  return true;
  } 
return false;
}

*/

/*
OFFICIAL SOLUTION
=================

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
*/
