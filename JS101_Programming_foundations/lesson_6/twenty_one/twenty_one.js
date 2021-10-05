const readline = require('readline-sync');

const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const TWO_DIGITS_CARD = '10';
const HONOURS = { J: 10, Q: 10, K: 10, A: 11 };
const SUITS = ['♠', '♥', '♦', '♣'];

const GAME_BUST = 21;
const DEALER_LIMIT = 17;
const WINNING_GAMES = 5;
const VALID_YES_OR_NO = ['y', 'n', 'yes', 'no'];
const ACTION = { hit: 'h', stay: 's' };
let score = { player: 0, dealer: 0 };
let handPoints = { player: 0, dealer: 0 };

const MYSTERY_CARD = [
  `┌────────────┐`,
  `│ ░░░░░░░░░░ │`,
  `│ ░░░░░░░░░░ │`,
  `│ ░░░░░░░░░░ │`,
  `│ ░░░░░░░░░░ │`,
  `│ ░░░░░░░░░░ │`,
  `│ ░░░░░░░░░░ │`,
  `│ ░░░░░░░░░░ │`,
  `└────────────┘`,
  `              `
];

function displayBanner() {
  console.log(`
**************************************************
             This is TWENTY-ONE!
**************************************************
  `);
}

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

function displayFullCard(card) {
  let spacedCard = card.slice();

  if (spacedCard[1] !== TWO_DIGITS_CARD) {
    spacedCard[1] = " " + spacedCard[1];
  }

  let cardArray = [
    `┌────────────┐`,
    `│ ${spacedCard[1]}         │`,
    `│            │`,
    `│            │`,
    `│     ${spacedCard[0]}      │`,
    `│            │`,
    `│            │`,
    `│         ${spacedCard[1]} │`,
    `└────────────┘`,
    `              `
  ];
  return (cardArray);
}

function formatFullCards(cards, who, play) {
  let cardsArray;
  // to display the first hand of the dealer
  if (cards.length === 2 && who === 'dealer' && play !== 's') {
    cardsArray = [displayFullCard(cards[0]), MYSTERY_CARD];
  } else {
    cardsArray = cards.map(card => displayFullCard(card));
  }

  // we consolidate all the cards in a single array for display
  let displayArray = [];
  if (cardsArray.length === 0) return displayArray;
  cardsArray[0].forEach(_ => displayArray.push([]));

  for (let index = 0; index < cardsArray[0].length; index += 1) {
    cardsArray.forEach(subArray => displayArray[index].push(subArray[index]));
  }

  return displayArray.map(subArray => subArray.join(''));
}

function displayFullCards(cards, who, play) {
  let handArray = formatFullCards(cards, who, play);
  handArray.forEach(element => console.log(element));
}

function displayPlayerDealerCards(playerCards, dealerCards, play) {
  if (play === 's') {
    console.log(`
Dealer has: ${formatCards(dealerCards)} (${handPoints.dealer} points)
You have: ${formatCards(playerCards)} (${handPoints.player} points)
    `);
  } else {
    console.log(`
Dealer has: ${formatCards([dealerCards[0]])} and a mystery card
You have: ${formatCards(playerCards)} (${handPoints.player} points)
    `);
  }
}

function busted(pointsPlayer) {
  return pointsPlayer > GAME_BUST;
}

function total(cards) {
  let values = cards.map(card => card[1]);
  let total = 0;

  values.forEach(value => {
    if (Object.keys(HONOURS).includes(value)) total += HONOURS[value];
    else total += Number(value);
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (total > GAME_BUST) total -= 10;
  });

  return total;
}

function hitOrStay() {
  let play = null;

  do {
    play = readline.question('=> Do you (h)it or (s)tay? ')[0].toLowerCase();

    if (!Object.values(ACTION).includes(play)) {
      prompt("You must enter 'h' or 's'");
    } else {
      return play;
    }
  } while (!Object.values(ACTION).includes(play));

  return null;
}

function displayResult(pointsPlayer, pointsDealer) {
  if (pointsPlayer > GAME_BUST) prompt('Busted, you lose');
  else if (pointsDealer > GAME_BUST) prompt('Dealer busted, you win');
  else if (pointsDealer < pointsPlayer) prompt ('You won');
  else if (pointsDealer > pointsPlayer) prompt ('You lose');
  else prompt("It's a tie");
}

function detectWinner(pointsPlayer, pointsDealer) {
  if (pointsPlayer > GAME_BUST) return 'dealer';
  else if (pointsDealer > GAME_BUST) return 'player';
  else if (pointsDealer < pointsPlayer) return 'player';
  else if (pointsDealer > pointsPlayer) return 'dealer';
  else return null;
}

function incrementScore(pointsPlayer, pointsDealer) {
  if (detectWinner(pointsPlayer, pointsDealer) === 'player') {
    score.player += 1;
  } else if (detectWinner(pointsPlayer, pointsDealer) === 'dealer') {
    score.dealer += 1;
  }
}

function displayScore() {
  console.log(`
  -----------SCOREBOARD-----------
  Player score: ${score.player}
  Dealer score: ${score.dealer}
  --------------------------------
  `);
}

function displayOverallWinner() {
  if (score.player === WINNING_GAMES) {
    console.log(`

__   __                                _ 
\\ \\ / /__  _   _  __      _____  _ __ | |
 \\ V / _ \\| | | | \\ \\ /\\ / / _ \\| '_ \\| |
  | | (_) | |_| |  \\ V  V / (_) | | | |_|
  |_|\\___/ \\__,_|   \\_/\\_/ \\___/|_| |_(_)

    `);
  } else if (score.dealer === WINNING_GAMES) {
    console.log(`
Computer won! :(
    `);
  }
}

function displayTable(playerCards, dealerCards, play) {
  displayScore();
  displayFullCards(dealerCards, 'dealer', play);
  displayPlayerDealerCards(playerCards, dealerCards, play);
  displayFullCards(playerCards, 'player', play);
}

function resetScore() {
  score.player = 0;
  score.dealer = 0;
}

function playAgain(question) {
  let answer;

  do {
    answer = readline.question(question).toLowerCase();

    if (!VALID_YES_OR_NO.includes(answer)) {
      prompt(`You must answer (y)es or (n)o.`);
    } else {
      return answer[0] === 'y';
    }
  } while (!VALID_YES_OR_NO.includes(answer));

  return null;
}

do {
  console.clear();
  readline.question("=> Welcome to Twenty-one, press a key to continue");
  do {
    console.clear();
    displayBanner();
    let deck = createShuffledDeck();
    let play = null;
    let playerCards = dealTwoCards(deck);
    let dealerCards = dealTwoCards(deck);
    handPoints.player = total(playerCards);
    handPoints.dealer = total(dealerCards);
    displayTable(playerCards, dealerCards, play);

    do {
      play = hitOrStay();
      console.clear();
      displayBanner();

      if (play === ACTION.hit) {
        playerCards.push(dealOneCard(deck));
        handPoints.player = total(playerCards);
        displayTable(playerCards, dealerCards, play);
      }

    } while (play === ACTION.hit && !busted(handPoints.player));

    if (play === ACTION.stay) {
      prompt(`You stayed at a total of ${handPoints.player} points.`);
    }

    while (handPoints.dealer < DEALER_LIMIT && !busted(handPoints.player)) {
      dealerCards.push(dealOneCard(deck));
      handPoints.dealer = total(dealerCards);
    }
    console.clear();
    readline.question("=> Press a key to see the results");
    console.clear();
    displayResult(handPoints.player, handPoints.dealer);
    incrementScore(handPoints.player, handPoints.dealer);
    displayTable(playerCards, dealerCards, play);

    if (score.player === WINNING_GAMES || score.dealer === WINNING_GAMES) {
      displayOverallWinner();
      resetScore();
      break;
    }

  } while (playAgain('Do you want to continue (y/n)? '));

} while (playAgain(`Do you want to start a new match (first to ${WINNING_GAMES}) (y/n)? `));