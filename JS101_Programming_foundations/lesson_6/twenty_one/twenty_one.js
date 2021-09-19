const readline = require('readline-sync');

const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['♠', '♥', '♦', '♣'];
const GAME_BUST = 21;
const DEALER_LIMIT = 17;

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
    .map(array => array.join(' '))
    .join(' / ');
}

function displayPlayerDealerCards(playerCards, dealerCards) {
  console.log(`
Dealer has: ${formatCards([dealerCards[dealerCards.length - 1]])} and a mystery card
You have: ${formatCards(playerCards)}
  `);
}

function displayHandAfterHit(cards, play) {
  if (play === 'h') {
    console.log(`
You hit a ${formatCards([cards[cards.length - 1]])}
Your hand is now:  ${formatCards(cards)}
  `);
  } else {
    console.log(`
Dealer hits a ${formatCards([cards[cards.length - 1]])}
Dealer hand is now: ${formatCards(cards)}
      `);
  }
}

function busted(totalPlayer) {
  return totalPlayer > GAME_BUST;
}

function total(cards) {
  let values = cards.map(card => card[1]);
  let total = 0;

  values.forEach(value => {
    if (value === 'A') total += 11;
    else if (['J', 'Q', 'K'].includes(value)) total += 10;
    else total += Number(value);
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (total > GAME_BUST) total -= 10;
  });

  return total;
}

function displayResult(totalPlayer, totalDealer) {
  if (totalPlayer > GAME_BUST) prompt('Busted, you lose');
  else if (totalDealer > GAME_BUST) prompt('Dealer busted, you win');
  else if (totalDealer < totalPlayer)prompt ('You won');
  else if (totalDealer > totalPlayer)prompt ('Dealer won');
  else prompt("It's a tie");
}

function playAgain() {
  let answer = readline.question('=> Do you want to play again (y/n)? ');
  return answer.toLowerCase()[0] === 'y';
}

do {
  console.clear;
  prompt(`Welcome to Twenty-One!`);
  let deck = createShuffledDeck();
  let play;
  let playerCards = dealTwoCards(deck);
  let dealerCards = dealTwoCards(deck);
  let totalPlayer = total(playerCards);
  let totalDealer = total(dealerCards);
  displayPlayerDealerCards(playerCards, dealerCards);

  do {
    do {
      play = readline.question('=> Do you (h)it or (s)tay? ').toLowerCase();

      if (play !== 'h' && play !== 's') {
        prompt("You must enter 'h' or 's'");
      }
    } while (play !== 'h' && play !== 's');

    if (play === 'h') {
      playerCards.push(dealOneCard(deck));
      displayHandAfterHit(playerCards, play);
      totalPlayer = total(playerCards);
    }
  } while (play === 'h' && !busted(totalPlayer));

  if (play === 's') {
    prompt(`You stayed at a total of ${total(playerCards)} points.`);
  }

  while (totalDealer < DEALER_LIMIT && !busted(totalPlayer)) {
    dealerCards.push(dealOneCard(deck));
    displayHandAfterHit(dealerCards, play);
    totalDealer = total(dealerCards);
  }

  displayResult(totalPlayer, totalDealer);
} while (playAgain());