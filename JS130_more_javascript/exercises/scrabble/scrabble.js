class Scrabble {
  static points1 = [ "A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ];
  static points2 = [ "D", "G" ];
  static points3 = [ "B", "C", "M", "P" ];
  static points4 = [ "F", "H", "V", "W", "Y" ];
  static points5 = [ "K"];
  static points8 = [ "J", "X" ];
  static points10 = [ "Q", "Z" ];

  constructor(word) {
    this.word = word || "";
  }

  score() {
    let score = 0;
    let word = this.word.trim().toUpperCase() || "";

    word.split("").forEach(letter => {
      if (Scrabble.points1.includes(letter)) score += 1;
      if (Scrabble.points2.includes(letter)) score += 2;
      if (Scrabble.points3.includes(letter)) score += 3;
      if (Scrabble.points4.includes(letter)) score += 4;
      if (Scrabble.points5.includes(letter)) score += 5;
      if (Scrabble.points8.includes(letter)) score += 8;
      if (Scrabble.points10.includes(letter)) score += 10;
    });

    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;  