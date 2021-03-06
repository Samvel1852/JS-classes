// Describe a model of a library. For that define classes: Library, Reader, Book.

// To create correct hierarchies and connections, you should have a subclasses of Book such as
// LibraryBookBase, LibraryBook, ReaderBook.

const books = [];
const readers = [];

class Book {
  constructor(title, author, bookId = 0) {
    this.title = title;
    this.author = author;
    this.bookId = bookId;
  }

  toString() {
    return `${this.title} ${this.author}`;
  }

  isTheSameBook(title, author) {
    if (this.title === title && this.author === author) {
      return true;
    }
    return false;
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
    books.push(this);
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

let exupery = new LibraryBook("Little Prince", "Exupery", 55, 20);

console.log("Books::1", books);

console.log(saroyan);
saroyan.increaseQuantityBy(10);
console.log(saroyan);
saroyan.decreaseQuantityBy(5);
console.log(saroyan);

console.log("Books::2", books);

class ReaderBook extends Book {
  static books = [];
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author, bookId);
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
    // this.books.push([this.title]);
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
  constructor(firstName, lastName, readerId, readerBooks = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = readerId;
    this.readerBooks = readerBooks;
  }

  borrowBook(book, library) {
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].author === book.author) {
        this.readerBooks.push(books[i]);
        books[i].quantity -= 1;
        // this.readerBooks[this.readerBooks.length - 1].quantity = 1;
        console.log("books[i]::2", books[i]);
        readers.push({
          name: this.firstName,
          surname: this.lastName,
          readerId: this.readerId,
          booksOfReader: this.readerBooks,
        });
        // readers[readers.length - 1].quantity = 1;
        return this.readerBooks;
      }
    }
    readers.push({
      name: this.firstName,
      surname: this.lastName,
      readerId: this.readerId,
      booksOfReader: this.readerBooks,
    });
  }
}
console.log("Exuperycheck::", books);
let smbat = new Reader("Smbat", "Balyan", 12);

console.log(
  "READER:SMBAT::",
  smbat.borrowBook({ title: "Little Prince", author: "Exupery" })
);

console.log("Exuperycheck::2", books);
class Library {
  constructor() {}

  doHaveBooks(book) {
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].author === book.author) {
        return true;
      }
    }
    return false;
  }

  addBook(book) {
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].author === book.author) {
        books[i].quantity += 1;
        return books;
      }
    }
    book.bookId = 400;
    book.quantity = 1;
    books.push(book);
    return books;
  }

  addBooks(newBooks) {
    // console.log("BEFORE ADD BOOKS", books);
    for (let i = 0; i < books.length; i += 1) {
      for (let j = 0; j < newBooks.length; j += 1) {
        // console.log("FOR CONSOLE::", books[i], newBooks[j]);
        if (
          books[i].title === newBooks[j].title &&
          books[i].author === newBooks[j].author
        ) {
          books[i].quantity += newBooks[j].quantity;
        } else {
          if (i === books.length - 1) {
            // newBooks[j].bookId = 300;
            newBooks[j].bookId = Math.floor(Math.random() * 1000000);
            books.push(newBooks[j]);
            newBooks.splice(j, 1);
            j -= 1;
          }
          continue;
        }
      }
    }
    return books;
  }

  checkTheReaderId(givenReaderId) {
    return readers.some((reader) => reader.readerId === givenReaderId);
  }

  lendBook(book, currentReaderId) {
    let isBookExists = false;
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].title === book.title && books[i].author === book.author) {
        isBookExists = true;
      }
    }
    // console.log(readers);
    let currentReader = readers.filter(
      (reader) => reader.readerId === currentReaderId
    );
    console.log(currentReader);

    if (
      currentReader[0].booksOfReader.some(
        (item) => item.bookId === book.bookId
      ) &&
      isBookExists
    ) {
      return [book, ...currentReader];
    }
    return false;
  }
}
console.log("READERS::", readers);
let gradaran = new Library();

console.log(
  gradaran.doHaveBooks({ title: "Little Prince", author: "Exupery" })
);
// console.log(books);
console.log(gradaran.addBook({ title: "esim inch", author: "esim ov" }));
console.log(gradaran.addBook({ title: "Little Prince", author: "Exupery" }));
console.log(gradaran.addBook({ title: "Little Prince", author: "Exupery" }));
console.log(
  gradaran.addBooks([
    { title: "Little Prince", author: "Exupery", quantity: 15 },
    { title: "mihat girq", author: "mihat mard", quantity: 4 },
  ])
);

console.log(gradaran.checkTheReaderId(12));
console.log(
  gradaran.lendBook(
    {
      title: "Little Prince",
      author: "Exupery",
      bookId: 55,
      quantity: 36,
    },
    12
  )
);
