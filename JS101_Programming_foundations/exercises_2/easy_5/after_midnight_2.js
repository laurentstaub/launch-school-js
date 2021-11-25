/*
PROBLEM
Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

Input: string (reprents time 24 hour clock)
Output: number (minutes to midnight
Rules: no date constructor
       2 functions
       return a value in the range 0 to 1439

EXAMPLES (see below)

ALGORITHM
Split the string into 2 parts hours and minutes
Then we return hours * 60 + minutes
*/

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(string) {
  let [hours, minutes] = string.split(':');
  return (Number(hours) * MINUTES_PER_HOUR + Number(minutes)) % MINUTES_PER_DAY;
}

function beforeMidnight(string) {
  let result = MINUTES_PER_DAY - afterMidnight(string);
  if (result === MINUTES_PER_DAY) return 0;
  return result;
}

console.log(afterMidnight("00:00"));
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);