/*
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.
*/

function timeOfDay(number) {
  const padToTwo = number => String(number).padStart(2, '0');
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_HOUR = 60;
  const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

  while (number >= MINUTES_PER_DAY) number -= MINUTES_PER_DAY;
  while (number < 0) number += MINUTES_PER_DAY;

  let minutes = number % MINUTES_PER_HOUR;
  let hours = (number - minutes) / MINUTES_PER_HOUR;

  return `${padToTwo(hours)}:${padToTwo(minutes)}`;
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");