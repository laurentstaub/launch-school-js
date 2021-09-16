/*
PROBLEM
-------
return the 3rd element in the WINNING_LINE arrays if 2 elements matches a
winning line for player and the  3rd is empty.

board = {1: "X", 2: "X", 3: " ", }
winning line 0 = [1, 2, 3]

Input: board object
Output: the "threat" element

EXAMPLE
-------
checkThreat({1: "X", 2: "X", 3: " "}) // 3
checkThreat({1: " ", 2: "X", 3: "X"}) // 1

DATA STRUCTURE
--------------
Objects and arrays

ALGORITHM
---------
for each line in Winning line
  we transform the winning line to a threat

    we check if the third value in object is an empty space
      if it is we return the key with the empty space 

*/

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function checkThreat(board) {
  for (let i = 0; i < WINNING_LINES.length; i += 1) {
    let modArray = WINNING_LINES[i].map(element => {
      return board[element];
    });
    
    if (modArray.filter(element => element === 'X').length === 2) {
      let spaceIndex = modArray.findIndex(element => element === ' ');
      if (spaceIndex !== -1) {
        return WINNING_LINES[i][spaceIndex];
      } 
    }
  }

  return null;
}

console.log(checkThreat({1: "X", 2: "X", 3: " "})) // 3
console.log(checkThreat({1: " ", 2: "X", 3: "X"})) // 1
console.log(checkThreat({1: "X", 2: "X", 3: "X", })) // null
console.log(checkThreat({4: "X", 5: "X", 6: " "})) // 6
console.log(checkThreat({1: " ", 2: "X", 3: " ",
                         4: " ", 5: "X", 6: "O",
                         7: " ", 8: "O", 9: "X"})) // 1 

