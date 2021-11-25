/*
n : Place a value, n, in the register. Do not modify the stack.

REGISTER STACK OPERATIONS
  PUSH : Push the register value onto the stack. Leave the value in the register.
  POP : Remove the topmost item from the stack and place it in the register.
  PRINT : Print the register value.

OPERATIONS
  ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.

ALGORITHM

  Register PRINT <-----POP / PUSH------> Stack

*/

function minilang(commands) {
  const COMMANDS_LIST = {
    PRINT: () => console.log(register) ,
    PUSH: () => stack.push(register),
    POP: () => register = stack.pop(),
    ADD: () => register += stack.pop(),
    SUB: () => register -= stack.pop(),
    MULT: () => register *= stack.pop(),
    DIV: () => register = Math.floor(register / stack.pop()),
    REMAINDER: () => register = register % stack.pop(),
  }
  let register = 0;
	let stack = [];


  commands.split(' ').forEach(command => {
    if (COMMANDS_LIST[command]) { 
      COMMANDS_LIST[command]();
    } else {
      register = Number(command);
    }
  })
}

console.log(minilang('PRINT')); // 0
console.log(minilang('5 PUSH 3 MULT PRINT')); // 15
console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT')) ; // 5 8 3
console.log(minilang('5 PUSH POP PRINT')); // 5
console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5 10 4 7
console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT')); // 6
console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT')); // 12
console.log(minilang('-3 PUSH 5 SUB PRINT')); // 8
console.log(minilang('6 PUSH')); //
