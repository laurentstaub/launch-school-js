/*
As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.
*/

function afterMidnight(string) {
  let hours = Number(string.slice(0, 2));
  let minutes = Number(string.slice(3));
  let totalMinutes = hours * 60 + minutes;

  if (totalMinutes === 1440) return 0;
  else return totalMinutes;
}

function beforeMidnight(string) {
  let totalMinutes = 1440 - afterMidnight(string);

  if (totalMinutes === 1440) return 0;
  else return totalMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
