class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  _checkTime() {
    while (this.minute < 0) {
      this.minute += 60;
      this.hour -= 1;
    }

    while (this.minute >= 60) {
      this.minute -= 60;
      this.hour += 1;
    }

    while (this.hour < 0) this.hour += 24;
    while (this.hour >= 24) this.hour -= 24;
  }

  add(addedMinutes) {
    this.minute += addedMinutes;
    this._checkTime();
    return this;
  }

  subtract(subtractMinutes) { // 200
    this.minute -= subtractMinutes; // 0 - 50
    this._checkTime();
    return this;
  }

  isEqual(anotherClock) {
    return this.hour === anotherClock.hour && this.minute === anotherClock.minute // false or true
  }

  toString() {
    return `${this.hour > 9 ? this.hour : '0' + this.hour}:${this.minute > 9 ? this.minute : '0' + this.minute}`;
  }
}

module.exports = Clock;
