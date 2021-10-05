const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7939;

console.log('=> Enter the length of the room in meters:');
let roomLength = readline.prompt();

console.log('=> Enter the width of the room in meters:');
let widthRoom = readline.prompt();

let areaInMeters = roomLength * widthRoom;
let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);
