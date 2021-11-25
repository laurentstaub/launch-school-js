/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Input: number (angle 0 to 360)
Output: string (angle in degrees, minutes, seconds)
Rules: Use °, ', "
       360 degrees
       60 minutes in a degree
       60 seconds in a minute

ALGORITHM
Integer number is the number of minutes, we take it out of the number
We divide the remainder of the number by 60
*/

function dms(number) {
  const DEGREES_PER_TURN = 360;
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  const padToTwo = number => String(number).padStart(2, '0');

  while (number >= 360) number -= DEGREES_PER_TURN;
  while (number <= 0) number += DEGREES_PER_TURN;

  let degrees = Math.floor(number);
  let minutes = padToTwo(Math.round(number % 1 * MINUTES_PER_DEGREE));
  let seconds = padToTwo(Math.round(minutes % 1 * SECONDS_PER_MINUTE));

  return `${degrees}°${minutes}'${seconds}`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"