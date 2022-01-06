/*
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.
*/

function timeOfDay(number) {
  const padToTwo = number => String(number).padStart(2, '0');
  let minutesPerDay = 1440;

  while (Math.abs(number) > minutesPerDay || number < 0) {
    if (number < 0) number += minutesPerDay;
    else number -= minutesPerDay;
  }

  let hours = Math.floor(number / 60);
  let minutes = Math.floor(number % 60);

  return `${padToTwo(hours)}:${padToTwo(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");