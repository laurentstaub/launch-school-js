"use strict";

class Meetup {
  // describe('meetup()', () => {
  // test('test first Monday of March 2013', () => {
  //   let meetup = new Meetup(2013, 3);
  //   let expected = dateAsString(2013, 3, 4);
  //   expect(meetup.day('Monday', 'first').toString()).toBe(expected);
  // });

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(dayOfTheWeek, order) {
    new Date(this.year, this.month, dayOfTheWeek)
  }

  // toString() {}
}

module.exports = Meetup;