
// [['H', '2'], ['S', 'J'], ['D', 'A']]
const readline = require('readline-sync');

const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['S', 'H', 'D', 'C'];
const FULL_SUITS = ['♠', '♥', '♦', '♣'];

function prompt(text) {
  console.log(`=> ${text}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
}

function createShuffledDeck() {
  let deck = [];

  SUITS.forEach(suit => {
    CARD_VALUES.forEach(value => {
      deck.push([suit, value]);
    });
  });

  return shuffle(deck);
}

function dealOneCard(deck) {
  return deck.pop();
}

function dealTwoCards(deck) {
  return [deck.pop(), deck.pop()];
}

function formatCards(cards) {
  return cards
    .map(card => {
      return card[1] + ' of ' + FULL_SUITS[SUITS.indexOf(card[0])];
    })
    .join(', ');
}

function busted(cards) {
  return total(cards) > 21;
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let total = 0;
  values.forEach(value => {
    if (value === 'A') {
      total += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      total += 10;
    } else {
      total += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (total > 21) total -= 10;
  });

  return total;
}

console.log(`Welcome to Twenty-One!`);
let deck = createShuffledDeck();

let dealerCards = dealTwoCards(deck);
let playerCards = dealTwoCards(deck);

console.log(`
Dealer has: ${formatCards([dealerCards[dealerCards.length - 1]])} and a mystery card
You have: ${formatCards(playerCards)}
`);

let play = 'h';

do {
  
  do {
    do {
      prompt(`Do you want to (h)it or (s)tay?`)
      play = readline.question().toLowerCase();

      if (play !== 'h' && play !== 's') {
        prompt("You must enter 'h' or 's'");
      }
    } while (play !== 'h' && play !== 's')

    if (play === 'h') {
      playerCards.push(dealOneCard(deck));
      prompt(`
You hit a ${formatCards([playerCards[playerCards.length - 1]])}
Your hand is now:  ${formatCards(playerCards)}
    `);
    }
  } while (play === 'h');

} while (play !== 's' && busted(playerCards));

if (busted(playerCards)) {}


/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

Dealer has: 7 and unknown card
You have: 10 and 7

if (busted()) {

} else {
  console.log("You chose to stay!");
}

while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted()) break;
}
*/

