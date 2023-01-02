/*
┌────────────────────┐
│ September ▒▒▒ 2022 │
├──┬──┬──┬──┬──┬──┬──┤
│Su│Mo│Tu│We│Th│Fr│Sa│
├──┼──┼──┼──┼──┼──┼──┤
│▒▒│▒▒│▒▒│▒▒│01│02│03│ // not here
├──┼──┼──╔══╗──┼──┼──┤
│04│05│06║07║08│09│10│ // here The meeting would be on Monday 5
├──┼──┼──╚══╝──┼──┼──┤
│11│12│13│14│15│16│17│ // third saturday Saturday
├──┼──┼──┼──┼──┼──┼──┤
│18│19│20│21│22│23│24│ // last saturday
├──┼──┼──┼──┼──┼──┼──┤
│25│26│27│28│29│30│▒▒│
└──┴──┴──┴──┴──┴──┴──┘

0 is Sunday to 6 is Monday: we can get it through the `getDay()` method
To do the day of the month calculation, we can use `getDate()` method

How do we find the third saturday ?
 * Find the first day of the month (new Date(year, month)) getDay to get the day of the week (from 0 to 6) => 4
 * Compare this number to the one we want (6)
   * we need to add 2 days to the
 * Find the first saturday and add 2 * 7 => Saturday 3 then we add 14 => Saturday 17.

arrayOfRank = ["first", "second", "third"]
firstDayOfMonth = new Date(year, month)
meetingDate = new Date();

meetingDate.setDate(firstDayOfMonth.getDate() + (passedInDayOfTheWeek - firstDayOftheMonth.getDay()) + arrayOfRank.indexOf(dayOfTheWeek) * 7)
                                                               6 - 4
0
The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

Return null if date doesn't exit
If the day we get > lastDay of the month => return null

last day of the month


*/

"use strict";

class Meetup {
  static nthDay = ["first", "second", "third", "fourth", "fifth"];
  static daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  _getFirstDayDifference(dayOfTheWeekString, firstDayOfMonth) {
    let firstDayDifference = Meetup.daysOfTheWeek.indexOf(dayOfTheWeekString) - firstDayOfMonth.getDay();
    if (firstDayDifference < 0) firstDayDifference += 7;
    return firstDayDifference;
  }

  day(dayOfTheWeekString, order) {

    order = order.toLowerCase();
    dayOfTheWeekString = dayOfTheWeekString.toLowerCase();

    let firstDayOfMonth = new Date(this.year, this.month - 1);
    let lastDayOfMonth = new Date(this.year, this.month, 0);
    let meetingDate = firstDayOfMonth;
    let firstDayDifference = this._getFirstDayDifference(dayOfTheWeekString, firstDayOfMonth);

    meetingDate.setDate(firstDayOfMonth.getDate() + firstDayDifference); // get the first day of the month with the correct weekday

    if (order === "last") {
      while (meetingDate.getDate() <= (lastDayOfMonth.getDate() - 7)) {
        meetingDate.setDate(meetingDate.getDate() + 7);
      }
    } else if (order === "teenth") {
      while (meetingDate.getDate() <= 12) {
        meetingDate.setDate(meetingDate.getDate() + 7);
      }
    } else {
      meetingDate.setDate(meetingDate.getDate() + Meetup.nthDay.indexOf(order) * 7);
      if (meetingDate.getTime() > lastDayOfMonth.getTime()) return null;
    }


    return meetingDate;
  }
}

module.exports = Meetup;