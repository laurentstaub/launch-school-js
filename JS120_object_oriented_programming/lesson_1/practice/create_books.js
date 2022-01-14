function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,
    getDescription() {
      let message = "I haven't read it.";
      if (this.read === true) message = "I have read it";
      return `${this.title} was written by ${this.author}. ${message}`;
    },
    readBook() {
      this.read = true;
    }
  }
}

let book1 = createBook("Mythos", "Stephen Fry");
console.log(book1.getDescription());
console.log(book1);

let book2 = createBook("Me Talk Pretty One Day", "David Sedaris", true);
console.log(book2.getDescription());
console.log(book2);

let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse", false);
book3.readBook();
console.log(book3.getDescription());
console.log(book3);