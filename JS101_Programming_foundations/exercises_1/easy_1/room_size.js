// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console
// in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

let readline = require('readline-sync');
const SQFEET_PER_SQMETER = 10.7639;

console.log('Enter the length of the room in meters:');
let length = Number(readline.prompt());

console.log('Enter the width of the room in meters:');
let width = Number(readline.prompt());

let surfaceMeters = length * width;
let surfaceFeet = surfaceMeters * SQFEET_PER_SQMETER;

console.log(
  `The area of the room is ${surfaceMeters.toFixed(2)} (${surfaceFeet.toFixed(2)}).`
);


// OFFICIAL SOLUTION

/*
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters
   (${areaInFeet.toFixed(2)} square feet).`
);

*/