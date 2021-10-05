/*
PROBLEM
-------

Write a function that takes a floating point number representing an angle 
between 0 and 360 degrees and returns a string representing that angle in 
degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
degrees, a single quote (') to represent minutes, and a double quote (") to
represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

what: a function
input: a number
output: a string

EXAMPLES
--------

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

DATA STRUCTURE
--------------
number - string

ALGORITHM
---------

Declare a variable Degrees equal to the floor integer value of the number
Substract the floor value to the number
Declare a variable Minutes equal to the floor of the remainder multiplied by 60
Substract the floor to the number
Declare a variable Seconds equal to the remainder multiplied by 60

Degrees°Minutes'Seconds''

Assemble a string to return the correct format

*/

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_DEGREE = 60;

function padZeroes(number) {
  if (String(number).length === 1) {
    return "0" + number;
  } else {
    return String(number);
  }
}

function checkNumber(number) {
  if (number > 360) {
    return number % 360;
  } else if (number < 0) {
    while (number < 0) {
      number = number + 360;
    }
    return number;
  } else {
    return number;
  }
}

function dms(number) {

  number = checkNumber(number);

  let degrees = Math.floor(number);
  number -= degrees;
  let minutes = Math.floor(number * MINUTES_PER_DEGREE);
  let numberSeconds = number * MINUTES_PER_DEGREE - minutes;
  let seconds = Math.floor(numberSeconds * SECONDS_PER_DEGREE);

  let minutesToDisplay = padZeroes(minutes);
  let secondsToDisplay = padZeroes(seconds);
 

  return `${degrees}°${minutesToDisplay}'${secondsToDisplay}`;
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