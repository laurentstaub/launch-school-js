/*
PROBLEM
=======
Input:
  * Loan amount
  * The Annual Percentage rate (APR)
  * Loan duration

Intermediary:
  * Monthly interest rate
  * Loan duration in months

Output:
  * Monthly payment

Rules:
let m = p * (j / (1 - Math.pow((1 + j), (-n))));
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

When you write your program, don't use the single-letter variables m, p, j,
and n; use explicit names. For instance, you may want to use loanAmount
instead of p.

Try to print the payment amount as a dollar and cents amount, e.g.,
$123.45 or $371.00.

EXAMPLES
========
=> Welcome to the Loan monthly payment Calculator.
=> What amount do you want to borrow?
200,000
=> What is you annual Interest rate?
4%
=> What is your loan duration in years?
5
=> Your monthly payment is $****.**

DATA STRUCTURE
==============
Input: numbers
Output: numbers

ALGORITHM
=========
PROMPT welcome message
PROMPT "What amount do you want to borrow?"
ASSIGN input of the amount to let amount
PROMPT "What is your annual interest rate?"
ASSIGN input of the annual interest rate to annualInterestRate
PROMPT "What is your loan duration in years?"
ASSIGN input of the loan duration to loanDurationYears

ASSIGN annualInterestRate / 12 to monthlyInterestRate
ASSIGN loanDurationYears / 12 to loanDurationMonths

CALCULATE AND ASSIGN
let monthlyPayment
  = loanAmount
  * (monthlyInterestRate
    / (1 - Math.pow((1 + monthlyInterestRate), (loanDurationMonths)
  )));

PROMPT "Your monthlyPayment is" at the format $***.** " for a total of $******
over a ** months period"

CODE
====
*/
const readline = require('readline-sync');
const messages = require('./loan_calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function notValidNumber(number) {
  return Number.isNaN(Number(number))
        || number.trimStart() === ''
        || number < 0;
}

function notValidAnswer(answer) {
  return answer !== 'n' && answer !== 'y';
}

prompt(messages.welcome);

while (true) {
  prompt(messages.borrowingAmount);
  let loanAmount = readline.question();

  while (notValidNumber(loanAmount)) {
    prompt(messages.inputNumber);
    loanAmount = readline.question();
  }

  prompt(messages.interestRate);
  prompt(messages.interestIndication);
  let annualInterestRatePercentage = readline.question();

  while (notValidNumber(annualInterestRatePercentage)) {
    prompt(messages.inputNumber);
    annualInterestRatePercentage = readline.question();
  }

  prompt(messages.loanDuration);
  let loanDurationYears = readline.question();

  while (notValidNumber(loanDurationYears)) {
    prompt(messages.inputNumber);
    loanDurationYears = readline.question();
  }

  let monthlyInterestRate = Number(annualInterestRatePercentage / 100) / 12;
  let loanDurationMonths = loanDurationYears * 12;

  let monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)} for a total of $${(monthlyPayment * loanDurationMonths).toFixed(0)} over ${loanDurationMonths} months`);

  prompt("Would you like to make another calculation? (y/n)");
  let answer = readline.question();

  while (notValidAnswer(answer)) {
    prompt("Please answer 'y' for yes or 'n' for no");
    answer = readline.question();
  }

  if (answer === "n") {
    break;
  }

}
