/*
let foo = 1;

function bar() {
  if (foo === 1) {
    foo = 2;                // you can change this line
  } else if (foo === 2) {
    foo = 3;                    // you can change this line
  } else {
    foo = 4;                    // you can change this line
  }
}

bar();
bar();
bar();
console.log(foo); // 1


function greet(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}.`);
  };
}

let sayHello = greet('Hello');
sayHello('Kim');


function emailMessageTo(message, address) {
  // code omitted
}

let emailMessage = {
  from: "me@example.com",
  subject: "Party Tonight!",
  body: "You're invited! My place - 7pm. Be there!",
};

function makeMailer(message) {
  return (address) => emailMessageTo(message, address);
}

let emailTo = makeMailer(emailMessage);
emailTo('foo@example.com');
emailTo('bar@example.com');
emailTo('qux@example.com');


function multiply(...args) {
  if (args.length === 2) {
    return args[0] * args[1];
  } else {
    return function(second) {
      return multiply(args[0], second);
    };
  }
}

console.log(multiply(6, 4) === 24);               // true
console.log(multiply(5, 7) === 35);               // true
console.log(multiply(3, 0) === 0);                // true

const triple = multiply(3);
console.log(triple(2) === 6);                     // true
console.log(triple(13) === 39);                   // true

QUESTION 7

function createBankAccount(initialBalance) {
  let deposits = [];
  let withdrawals = [];
  let balance = initialBalance;
  let transactionId = 0;

  return {
    getTransactionId() {
       transactionId += 1;
       return transactionId;
    },

    getBalance() {
      return balance;
    },

    deposit(amount) {
      balance += amount;
      this.deposits.push([this.getTransactionId(), amount]);
    },

    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      withdrawals.push([this.getTransactionId(), amount]);
    },

    getDeposits() {
      return deposits;
    },

    getWithdrawals() {
      return withdrawals;
    },
  };
}

let bankAccount = createBankAccount(3);
console.log(bankAccount.getBalance());


QUESTION 8


function distanceFromOrigin({ coordX, coordY, coordZ }) {
  console.log(`X is ${coordX}`);
  console.log(`Y is ${coordY}`);
  console.log(`Z is ${coordZ}`);
  return Math.sqrt((coordX ** 2) + (coordY ** 2) + (coordZ ** 2));
}

let point = {
  coordY: -2,
  coordZ: 3,
  coordX: 6,
};

console.log(distanceFromOrigin(point));

QUESTION 12


try {
  foo();
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Got another ReferenceError exception");
  }
  console.log("That's all, folks!");
}

console.log("End program");

function foo() {
  try {
    doThis();
    console.log("tried to run doThis");
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Got a ReferenceError exception");
      console.log('I ran too!')
      doThis();
    }

    throw error;
  }

  console.log("Done with foo()");
}
*/

let Account = (function() {
  let deposits = [];
  let withdrawals = [];
  let balance;
  let transactionId = 0;

  return {
    init: function(initialBalance) {
      balance = initialBalance;
      return this;
    },

    getTransactionId() {
      transactionId += 1;
      return transactionId;
    },

    getBalance() {
      return balance;
    },

    deposit(amount) {
      balance += amount;
      deposits.push([this.getTransactionId(), amount]);
    },

    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      withdrawals.push([this.getTransactionId(), amount]);
    },

    printDeposits() {
      deposits.forEach(deposit => console.log(deposit));
    },

    printWithdrawals() {
      withdrawals.forEach(withdrawal => console.log(withdrawal));
    },
  };
})();

let account = Object.create(Account).init(3);
console.log(account.deposit(5));
console.log(account.deposit(4));
account.printDeposits();

// let trick = account.getDeposits();
// console.log(trick);
// trick.push('Tricked');
// console.log(account.getDeposits());   // []
 /*
console.log(account.balance);
console.log(account.getBalance());
console.log(account.deposit(5));
console.log(account.getBalance());
console.log(account.withdraw(4));
console.log(account.getBalance());
console.log(account.getWithdrawals());
console.log(account.getDeposits());
*/
