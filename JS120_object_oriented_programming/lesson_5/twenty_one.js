/*
Twenty-one is a card game played with 2 players, a deale and a player.
The winner is the player that gets closer to 21 without going over 21.
The game starts by dealing cards from a 52-card deck consisting of cards
  4 suits of 13 ranks each.
Both players receive 2 cards
  * The dealer hides one of his cards (face down) so that the player can't
    see what it is
  * The player can see both of her cards

The player takes the first turn, and can hit or stay
  * If the player hits, he gets 1 more card, and can choose to hit or stay
  * If the total > 21 => bust
  * If the player stays, the dealer plays next

If the player didn't bust, it's now the dealer's turn
  * The dealer reveals his face down card
  * If the dealer's total points are less than 17, he must hit
  * If the dealer goes over 21, he busts
  * If the dealer has 17 points or more, he must stay

Results of the game are determined

Nouns: game, player, dealer, participant, turn, deck, card, suit, rank,
       score, points
Verbs: start, deal, hit, stay, win, lose, tie, bust, hide, reveal

Game: start
Deck: deal
Card
Participant
Player: hit, stay, bust(state), score(state)
Dealer: hit, stay, deal, bust(state), score(state)

*/

// const readline = require("readline-sync");

class Card {
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
}

class Deck {
  static CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  static HONOURS = { J: 10, Q: 10, K: 10, A: 11 };
  static SUITS = ['♠', '♥', '♦', '♣'];

  constructor() {
    this.deck = []; //this.createShuffledDeck();
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

  score() {
    let values = this.hand.map(function(card) {
      return card[value];
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
    this.displayWelcomeMessage();
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
    console.log(this.player.hand);
    console.log(this.dealer.hand);
  }

  playerTurn() {
    //STUB
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    console.log(`
**************************************************
             This is TWENTY-ONE!
**************************************************
  `);
  }

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Twenty-One!`);
  }

  displayResult() {
    //STUB
  }
}

let game = new TwentyOneGame();
game.start();