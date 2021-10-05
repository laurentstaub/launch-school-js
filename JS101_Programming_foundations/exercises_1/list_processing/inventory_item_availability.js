/*
PROBLEM
Building on the previous exercise, write a function that returns true or false
based on whether or not an inventory item is available. As before, the function
takes two arguments: an inventory item and a list of transactions. The function
should return true only if the sum of the quantity values of the item's
transactions is greater than zero. Notice that there is a movement property
in each transaction object. A movement value of 'out' will decrease the item's
quantity.

You may (and should) use the transactionsFor function from the previous
exercise.

Input
Output: true or false

EXAMPLE
isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

DATA STRUCTURE
array of objects
numbers to calculate the stock level
boolean value

ALGORITHM
for the asked item, we filter the concerned items through the trnasactionsFor
function

We set a stock variable
Then, for each item, we check if movement is in or out
  If in: we add to the stock
  If out: we take from the stock

If stock is above 0, we return true
*/

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


function transactionsFor(itemID, transactions){
  return transactions.filter(object => object.id === itemID);
}

function isItemAvailable(itemID, transactions) {
  let selectedItems = transactionsFor(itemID, transactions);
  let stock = 0;

  selectedItems.forEach(element => {
    if (element.movement === 'in') stock += element.quantity;
    else if (element.movement === 'out') stock -= element.quantity;
  });

  return stock > 0;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));