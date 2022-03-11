class Banner {
  constructor(message, width = undefined) {
    if (width) {
      if ((width - 2) <= message.length) width = message.length + 2;
    }
    this.message = message;
    this.width = width;
    this.halfSpacing = (width - message.length - 2) / 2;
  }

  displayBanner() {
    console.log([this.line('-', '+'), this.line(' ', '|'), this.messageLine(), this.line(' ', '|'), this.line('-', '+')].join("\n"));
  }

  line(marker, end) {
    if (this.width) return `${end}${marker.repeat(this.width - 2)}${end}`;
    return `${end}${marker.repeat(this.message.length + 2)}${end}`;
  }

  messageLine() {
    if (this.width) return `|${' '.repeat(Math.floor(this.halfSpacing))}${this.message}${' '.repeat(Math.ceil(this.halfSpacing))}|`;
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

let banner2 = new Banner('');
banner2.displayBanner();
/*
+--+
|  |
|  |
|  |
+--+
*/

let banner3 = new Banner('boldly', 14);
banner3.displayBanner();
/*
+--------+
|        |
| boldly |
|        |
+--------+
*/

let banner4 = new Banner('boldly.', 14);
banner4.displayBanner();
/*
+------------+
|            |
|  boldly.   |
|            |
+------------+
*/

let banner5 = new Banner('boldly', 4);
banner5.displayBanner();
/*
+---------+
|         |
| boldly. |
|         |
+---------+
*/
