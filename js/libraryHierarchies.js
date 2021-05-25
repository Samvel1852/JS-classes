// Describe a model of a library. For that define classes: Library, Reader, Book.

// To create correct hierarchies and connections, you should have a subclasses of Book such as
// LibraryBookBase, LibraryBook, ReaderBook.

class Book {
  constructor(title, author, bookId) {
    this.title = title;
    this.author = author;
    this.bookId = bookId;
  }

  toString() {
    return `${this.title} ${this.author}`;
  }

  isTheSameBook(title, author) {
    if (this.title === title && this.author === author) {
      return "The same book";
    }
    return "Not the same book";
  }
}

let sevak = new Book("Anlreli Zangakatun", "Paruyr Sevak");

console.log(sevak.toString());
console.log(sevak.isTheSameBook("Anlreli Zangakatun", "Paruyr Sevak"));
console.log(
  sevak.isTheSameBook("Ambokhner@ Khelagarvats", "Yeghishe Charents")
);

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author, bookId);
  }

  toString() {
    return `The id of ${this.title} ${this.author} is ${this.bookId}`;
  }
}

let demirtshyan = new LibraryBookBase("Qaj Nazar", "Derenik Demirtshyan", 123);

console.log(demirtshyan.toString());

class LibraryBook extends Book {
  constructor(title, author, bookId, quantity) {
    super(title, author, bookId);
    this.quantity = quantity;
  }

  increaseQuantityBy(amount) {
    this.quantity += amount;
  }

  decreaseQuantityBy(amount) {
    this.quantity -= amount;
  }
}

let saroyan = new LibraryBook(
  "Mardkayin Katakergutyun",
  "Vilyam Saroyan",
  100,
  10
);

console.log(saroyan);
saroyan.increaseQuantityBy(10);
console.log(saroyan);
saroyan.decreaseQuantityBy(5);
console.log(saroyan);

class ReaderBook extends Book {
    static books = [];
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author, bookId);
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
    this.books.push([this.title, )
  }
}

let rdBook = new ReaderBook(
  "Little Prince",
  "Ekzupery",
  11,
  "24.03.2003",
  false
);

console.log(rdBook);

class Reader {
  constructor(firstName, lastName, readerId, books) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = readerId;
    this.books = books;
  }
}

class Library {
    constructor (books, readers) {
        this.books = books;
        this.readers = readers;
    }

    doHaveBooks (book) {
        if (this.books.includes(book)){
            return true;
        }
        return false;
    }

    addBook(book){
        // this.books.forEach((item, index) => {
        //     if (item.id === book.id){
        //         item.quantity += 1
        //     }
        //     if (index === this.books.length) {

        //     }
        // })
        for (let i = 0; i < this.books.length; i += 1){
            let item = this.books[i];
            if (item.id === book.id){
                item.quantity += 1;
                break
            }
            if (i === this.books.length - 1){
                this.books.push(book);
            }
        }
    }
}