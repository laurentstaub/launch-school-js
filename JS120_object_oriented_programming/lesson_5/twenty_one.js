const readline = require("readline-sync");

class Card {
  static HIDDEN_CARD = [
    `┌─────-──────┐`,
    `│ ░░░░░░░░░░ │`,
    `│ ░░░░░░░░░░ │`,
    `│ ░░░░░░░░░░ │`,
    `│ ░░░░░░░░░░ │`,
    `│ ░░░░░░░░░░ │`,
    `│ ░░░░░░░░░░ │`,
    `│ ░░░░░░░░░░ │`,
    `└────────-───┘`,
    `              `
  ];

  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.hidden = false;
  }

  hide() {
    return this.hidden = true;
  }

  show() {
    return this.hidden = false;
  }

  getValue() {
    return this.value;
  }

  createGraphicCard() {
    let cardArray = [];
    let VISIBLE_CARD = [
      `┌───────────┐`,
      `│ ${this.suit}         │`,
      `│           │`,
      `│           │`,
      `│    ${this.value.length === 1 ? " " + this.value : this.value}     │`,
      `│           │`,
      `│           │`,
      `│         ${this.suit} │`,
      `└───────────┘`,
      `              `
    ];

    if (this.hidden === false) {
      VISIBLE_CARD.forEach(element => cardArray.push(element));
    } else {
      Card.HIDDEN_CARD.forEach(element => cardArray.push(element));
    }
    return cardArray;
  }
}

class Deck {
  static CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  static HONOURS = { J: 10, Q: 10, K: 10, A: 11 };
  static SUITS = ['♠', '♥', '♦', '♣'];

  constructor() {
    this.deck = [];
    this.createShuffledDeck(this.deck);
  }

  shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
    }

    return array;
  }

  createShuffledDeck(deck) {
    Deck.SUITS.forEach(suit => {
      Deck.CARD_VALUES.forEach(value => {
        deck.push(new Card(suit, value));
      });
    });

    return this.shuffle(deck);
  }

  deal() {
    return this.deck.pop();
  }

  dealHiddenCard() {
    let card = this.deck.pop();
    card.hide();
    return card;
  }
}

class Participant {
  static BUST_SCORE = 21;

  constructor() {
    this.hand = [];
    this.score = 0;
  }

  addCardToHand(card) {
    this.hand.push(card);
  }

  totalScore() {
    let values = this.hand
    .filter(function(card) {
      return card.hidden === false;
    })
    .map(function(card) {
      return card.getValue();
    });

    let total = 0;
    
    values.forEach(function(value) {
      if (Object.keys(Deck.HONOURS).includes(value)) {
        total += Deck.HONOURS[value];
      } else total += Number(value);
    });

    values
      .filter(function(value) {
        return value === 'A';
      })
      .forEach(function() {
        if (total > Participant.BUST_SCORE) total -= 10;
      });

    return total;
  }

  resetHand() {
    this.hand = [];
  }

  displayHand() {
    let handArray = [];
    for (let index = 0; index <= 9; index += 1) {
      handArray.push([]);

      this.hand.forEach(function(card) {
        let graphicCard = card.createGraphicCard();
        handArray[index].push(graphicCard[index]);
      });

      console.log(handArray[index].join('  '));
    }
  }
}

class Player extends Participant {
  constructor() {
    super();
  }
}

class Dealer extends Participant {
  static MINIMUM_SCORE = 17;
  constructor() {
    super();
  }
}

class TwentyOneGame {
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.displayBanner();
    this.dealCards();

    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    this.deck = new Deck();
    this.player.resetHand();
    this.dealer.resetHand();

    this.player.addCardToHand(this.deck.deal());
    this.dealer.addCardToHand(this.deck.deal());
    this.player.addCardToHand(this.deck.deal());
    this.dealer.addCardToHand(this.deck.dealHiddenCard());
  }

  showCards() {
    console.clear();
    this.displayBanner();
    console.log(`Your cards (${this.player.totalScore()}): `);
    this.player.displayHand();
    console.log(`Dealer cards (${this.dealer.totalScore()}): `);
    this.dealer.displayHand();
  }

  playerTurn() {
    while(this.hitAnswer()) {
      this.player.addCardToHand(this.deck.deal());
      this.showCards();
      if (this.isBusted(this.player)) break;
    } 
  }

  hitAnswer() {
    let answer;
    let validAnswers = ['h', 'hit', 's', 'stay'];

    while(true) {
      answer = readline.question('Do you want to (h)it or (s)tay? ').toLowerCase();

      if (validAnswers.includes(answer)) break;
      else console.log("Please input a valid answer 'h' for 'hit or 's' for stay.");
    }
    
    return answer === 'h' || answer === 'hit';
  }

  isBusted(participant) {
    return participant.totalScore() > Participant.BUST_SCORE;
  }

  dealerTurn() {
    if (this.isBusted(this.player)) return;

    while (this.dealer.totalScore() < 17) {
      this.dealer.addCardToHand(this.deck.deal());
    }
    
    this.dealer.hand[1].hidden = false;
    this.showCards();
  }

  displayBanner() {
    console.log(`
**************************************************
             This is TWENTY-ONE!
**************************************************
  `);
  }

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Twenty-One!`);
    console.log('');
  }

  displayResult() {
    if (this.isBusted(this.player)) console.log(`You busted (${this.player.totalScore()} points)! Dealer wins!`);
    else if (this.isBusted(this.dealer)) console.log((`Dealer busted (${this.dealer.totalScore()} points)!, You win.`));
    else {
      let playerScore = this.player.totalScore();
      let dealerScore = this.dealer.totalScore();

      if (dealerScore > playerScore) {
        console.log(`Dealer wins with ${this.dealer.totalScore()} points.`);
      } else if (dealerScore < playerScore) {
        console.log(`You win with ${this.player.totalScore()} points.`);
      } else {
        console.log(`It's a tie.`);
      }
    }

    console.log('');
  }
}

let game = new TwentyOneGame();
game.start();