const READLINE = require("readline-sync");
const SCORE = {
  dealer: 0,
  player: 0,
};
const ROUNDS = 5;
const TOTAL_MAX = 21;
const DEALER_MAX = 17;


function createDeck() {
  let deck = [];
  let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let faces = ["Jack", "Queen", "King", "Ace"];
  let symbols = ["♥", "♦", "♣", "♠"];
  let card = {};

  suits.forEach((suit, index) => {
    for (let lcv = 2; lcv <= 14; lcv++) {
      if (lcv <= 10) {
        card = { suit: suit, face: lcv, symbol: symbols[index], value: lcv};
        if (lcv < 10) {
          card.graphic = [
            [` ┌─────┐ `],
            [` │${card.value}    │ `],
            [` │  ${card.symbol}  │ `],
            [` │    ${card.value}│ `],
            [` └─────┘ `]];
        } else {
          card.graphic = [
            [` ┌─────┐ `],
            [` │${card.value}   │ `],
            [` │  ${card.symbol}  │ `],
            [` │   ${card.value}│ `],
            [` └─────┘ `]];
        }
      } else if (lcv !== 14) {
        card = { suit: suit, face: faces[lcv - 11],
          symbol: symbols[index], value: 10};
        card.graphic = [
          [` ┌─────┐ `],
          [` │${card.face[0]}    │ `],
          [` │  ${card.symbol}  │ `],
          [` │    ${card.face[0]}│ `],
          [` └─────┘ `]];
      } else {
        card = { suit: suit, face: faces[3], symbol: symbols[index], value: 11};
        card.graphic = [
          [` ┌─────┐ `],
          [` │${card.face[0]}    │ `],
          [` │  ${card.symbol}  │ `],
          [` │    ${card.face[0]}│ `],
          [` └─────┘ `]];
      }
      deck.push(card);
    }
  });

  return deck;
}

function displayCards(hand, hideDealerCard = false) {
  let cardRow;
  let backside = [
    [` ┌─────┐ `],
    [` │░░░░░│ `],
    [` │░░░░░│ `],
    [` │░░░░░│ `],
    [` └─────┘ `]];

  for (let lcv = 0; lcv < 5; lcv++) {
    cardRow = " ";
    for (let inner = 0; inner < hand.length; inner++) {
      if (hideDealerCard && inner === 1) {
        cardRow += backside[lcv];
      } else {
        cardRow += hand[inner].graphic[lcv];
      }
    }
    console.log(cardRow);
  }
}

function shuffleDeck(deck) {
  let shuffledDeck = [];

  for (let lcv = 0; lcv < 52; lcv++) {
    let randomCard = Math.floor(Math.random() * deck.length);
    shuffledDeck.push(deck.splice(randomCard, 1));
  }

  return shuffledDeck;
}

function welcome() {
  console.clear();
  console.log("                 WELCOME TO TWENTY ONE                ");
  console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
  READLINE.question("\nPress Enter To Continue...");
}

function dealCard(deck) {
  let newCard = deck.pop();
  return newCard[0];
}

function hit(hand, shuffledDeck) {
  hand.push(dealCard(shuffledDeck));
}

function initialDeal(hands, deck) {
  for (let lcv = 0; lcv < 2; lcv++) {
    hands.player.push(dealCard(deck));
    hands.dealer.push(dealCard(deck));
  }
}

function showBoard(hands, hideDealerCard = false) {
  console.clear();
  console.log("                      TWENTY  ONE                     ");
  console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
  console.log(` Dealer: ${SCORE.dealer}             Best Of 5            Player: ${SCORE.player} `);
  console.log("──────────────────────────────────────────────────────");
  console.log(`                DEALER CARDS - Total: ${(hideDealerCard) ? "Unknown" : hands.dealerTotal()}  `);
  displayCards(hands.dealer, hideDealerCard);
  console.log("──────────────────────────────────────────────────────");
  displayCards(hands.player);
  console.log(`                PLAYER CARDS - Total: ${hands.playerTotal()}  `);
  console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
}

function compareScore(hands) {
  if (bust(hands.playerTotal())) {
    SCORE.dealer++;
    showBoard(hands);
    console.log("Player Busts! Dealer Wins!");
  } else if (bust(hands.dealerTotal())) {
    SCORE.player++;
    showBoard(hands);
    console.log("Dealer Busts! Player Wins!");
  } else if (hands.playerTotal() > hands.dealerTotal()) {
    SCORE.player++;
    showBoard(hands);
    console.log("Player Wins!");
  } else if (hands.playerTotal() < hands.dealerTotal()) {
    SCORE.dealer++;
    showBoard(hands);
    console.log("Dealer Wins!");
  } else {
    console.log("Tie!");
  }
}

function playerHits() {
  let userChoice = READLINE.question("(h)it or (s)tay: ").toLowerCase();
  do {
    if (userChoice === "h" || userChoice === "hit") {
      return true;
    } else if (userChoice === "s" || userChoice === "stay") {
      return false;
    } else {
      console.log("Unrecognized Choice. Please Try Again...");
      userChoice = READLINE.question("(h)it or (s)tay: ").toLowerCase();
    }
  } while (true);
}

function playerTurn(hands, shuffledDeck) {
  while (!bust(hands.playerTotal())) {
    showBoard(hands, true);
    if (playerHits()) {
      showBoard(hands, true);
      console.log("Player Hits!");
      sleep(1250);
      hit(hands.player, shuffledDeck);
    } else {
      showBoard(hands, true);
      console.log("Player Stays!");
      sleep(1250);
      break;
    }
  }
}

function dealerTurn(hands, shuffledDeck) {
  while (!bust(hands.dealerTotal())) {
    showBoard(hands);
    if (hands.dealerTotal() < DEALER_MAX) {
      console.log("Dealer Hits!");
      sleep(1250);
      hit(hands.dealer, shuffledDeck);
    } else {
      console.log("Dealer Stays!");
      sleep(1250);
      showBoard(hands);
      break;
    }
  }
}

function bust(hand) {
  return hand > TOTAL_MAX;
}

function sleep (milliseconds) {
  let date = Date.now();
  let currentDate;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function initializeHands() {
  let hands = {
    player: [],
    dealer: [],
    calcHandTotal(hand) {
      let total = 0;

      hand.forEach(card => {
        total += card.value;
      });

      hand.filter(card => card.face === "Ace").forEach(_ => {
        if (total > TOTAL_MAX) total -= 10;
      });

      return total;
    },
    playerTotal() { return this.calcHandTotal(this.player) },
    dealerTotal() { return this.calcHandTotal(this.dealer) }
  };

  return hands;
}
function gameRound(hands, deck) {

  playerTurn(hands, deck);
  if (bust(hands.playerTotal())) {
    return;
  }
  dealerTurn(hands, deck);
}

function nextRound() {
  let playAgain = "";
  if (SCORE.player !== ROUNDS && SCORE.dealer !== ROUNDS) {
    playAgain = READLINE.question("Are you ready for the next round? (y, n): ");
  } else {
    if (SCORE.player === 5) {
      console.log("PLAYER WINS THE GAME!");
    } else {
      console.log("DEALER WINS THE GAME!");
    }
    playAgain = READLINE.question("Do you want to play again? (y, n): ");
    if (playAgain === "y") {
      SCORE.player = 0;
      SCORE.dealer = 0;
    }
  }

  return playAgain;
}

function main() {
  let playAgain;
  let hands = initializeHands();

  welcome();

  do {
    hands.player = [];
    hands.dealer = [];
    let deck = shuffleDeck(createDeck());

    initialDeal(hands, deck);
    gameRound(hands, deck);
    compareScore(hands);

    playAgain = nextRound();

  } while (playAgain === "y");

  console.log("\nThank you for playing!");
}

main();