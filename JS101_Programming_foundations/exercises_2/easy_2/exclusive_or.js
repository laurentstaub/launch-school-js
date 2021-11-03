const xor = (item1, item2) => !!item1 !== !!item2; 

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(1, 6) === false);
console.log(xor(true, true) === false);