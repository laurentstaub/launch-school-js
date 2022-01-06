let readline = require('readline-sync');
const SQ_METER_TO_FEET = 10.7639;
const UNITS = {m: 'meters', s: 'feet'};

let unit = readline.question('Do you want to work in meters (m) or square feet (s)?\n');
let otherUnit = unit === 'm' ? 's' : 'm';

let length = readline.question(`Enter the length of the room in ${UNITS[unit]}:\n`);
let width = readline.question(`Enter the width of the room in ${UNITS[unit]}:\n`);

let surf = length * width;
let surfOther = unit === 'm' ? surf * SQ_METER_TO_FEET : surf / SQ_METER_TO_FEET;

console.log(`The area of the room is ${surf.toFixed(2)} square ${UNITS[unit]} (${surfOther.toFixed(2)} square ${UNITS[otherUnit]}).`);