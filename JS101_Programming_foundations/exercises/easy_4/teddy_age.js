/*
0 to 10 
let teddyAge = Math.round(Math.random() * 10) + 0;
*/

console.log(`Teddy is ${teddyAge} years old!`);

function randomBetween(min, max) {
  return Math.floor(Math.random() * (Math.abs(max - min) + 1))
                    + Math.min(min, max);
}


let results = Array(11).fill(0);
for (let i = 0; i < 10000; i++) {
  results[randomBetween(0, 10)] += 1;
}

console.log(results); 



let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);


function randomBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}


function randomBetween(min, max) {
  return Math.floor(Math.random() * (Math.abs(max - min) + 1))
                    + Math.min(min, max);
}

let results = Array(11).fill(0);
for (let i = 0; i < 10000; i++) {
  results[randomBetween(0, 10)] += 1;
}

console.log(results); 