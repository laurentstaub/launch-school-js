/*
PROBLEM
-------
After Midnight (Part 2)
As seen in the previous exercise, the time of day can be represented as the
number of minutes before or after midnight. If the number of minutes is
positive, the time is after midnight. If the number of minutes is negative,
the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return
the number of minutes before and after midnight, respectively. Both functions
should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Input: string
Output: number

EXAMPLES
--------
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

DATA STRUCTURE
--------------

ALGORITHM
---------
We will need to turn the string to a number to do a calculation
  * the left part of the string is the hour
  * right part of the string is the minutes

CODE
----
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(string) {
  let hours = Number(string.slice(0, 2));
  let minutes = Number(string.slice(3, 5));
  return (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(string) {
  return (MINUTES_PER_DAY - afterMidnight(string))  % MINUTES_PER_DAY;
}
*/

const MINUTES_PER_DAY = 1440;

function afterMidnight(string) {
  let time = new Date(`August 10, 2021 ${string}:00`);
  return (time.getHours() * 60) + time.getMinutes();
}

function beforeMidnight(string) {
  return (MINUTES_PER_DAY - afterMidnight(string)) % MINUTES_PER_DAY;
}

console.log(afterMidnight("00:00"));
console.log(beforeMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(beforeMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));