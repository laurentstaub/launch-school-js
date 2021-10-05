/*
PROBLEM
-------
After Midnight (Part 1)
The time of day can be represented as the number of minutes before or after
midnight. If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns 
he time of day in 24 hour format (hh:mm). Your function should work with any
integer input.

You may not use javascript's Date class methods.

Input: number (minutes before or after midnight)
Output: string (hh:mm)

EXAMPLES
--------
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

DATA STRUCTURES
---------------
number => minutes & hours => string

ALGORITHM
---------
minutes per hour = 60
hours per day = 24
minutes per day = 24 * 60 = 1440

if the number is negative, we add 1440 until it becomes positive
we calculate the number of hours by dividing number by 60 and getting the floor
we get the number of minutes by getting the remainder of 60

we define a function to pad with zeroes if minutes or hours length is 1
we pad

we return the string with the desired format "00:00"

function padZeroes (string) {
  if (string.length === 1) {
    return "0" + string;
  }

  return string;
}

function timeOfDay(number) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

  while (number < 0) {
    number += MINUTES_PER_DAY;
  }

  while (number > MINUTES_PER_DAY) {
    number -= MINUTES_PER_DAY;
  }

  let hours = padZeroes(String(Math.floor(number / 60)));
  let minutes = padZeroes(String(number % 60));

  return `${hours}:${minutes}`;
}

*/

function formatDateOutput(date) {
  let days = [
    'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
  ];
  
  let day = String(days[date.getDay()]);
  let hour = String(date.getHours());
  let minute = String(date.getMinutes());

  return `${day} ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
}

function timeOfDay(number) {
  const MILLISECONDS_PER_MINUTE = 60000;
  const REFERENCE_TIME = (new Date ('August 8, 2021 00:00:00').getTime());

  let date = new Date(REFERENCE_TIME + number * MILLISECONDS_PER_MINUTE);
  
  return formatDateOutput(date);
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));