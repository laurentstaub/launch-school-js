/*
PROBLEM
Is quantity for an item > 0 ?
If a movement is 'in', we increment the total quantity
Otherwise, if 'out', we decrement it

ALGORITHM
We get all the transactions for the items

*/

function transactionsFor(ref, array) {
  return array.filter(object => object.id === ref);
}

function isItemAvailable(ref, array) {
  return transactionsFor(ref, array).reduce((acc, object) => {
    if (object.movement === 'in') return acc += object.quantity;
    if (object.movement === 'out') return acc -= object.quantity;
  }, 0) > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true