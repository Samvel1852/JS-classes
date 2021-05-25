"use strict";
function Author(name, email, gender) {
  this._name = name;
  this.email = email;
  this.gender = gender;
}

// Author.prototype = {};
// console.log(Author.prototype);

Object.defineProperty(Author.prototype, "name", {
  get() {
    return this._name;
  },
  set(val) {
    if (typeof val === "string") {
      this._name = val;
    } else {
      throw new Error("not string");
    }
  },
});

Author.prototype.toString = function () {
  if (this.gender === "male") {
    return `Mr ${this.name}`;
  } else if (this.gender === "female") {
    return "Ms " + this.name;
  }
};

function Book(title, author, price, quantity) {
  this.title = title;
  this._author = author;
  this.price = price;
  this.quantity = quantity;
}

Book.prototype.toString = function () {
  return `${this.title}`;
};

Book.prototype.getProfit = function () {
  return `the profit is ${this.quantity * this.price}`;
};

Object.defineProperty(Book.prototype, "author", {
  get() {
    return this._author;
  },
  set(val) {
    if (typeof val === "string") {
      this._author = val;
    } else {
      throw new Error("not string");
    }
  },
});

let karlen = new Author("Karlen", "Karlen@gmail.com", "male");

console.log(karlen.name, "getter");
karlen.name = "Hakob";
console.log(karlen, "for setter");
console.log(karlen.toString(), "toString");

let sevak = new Book("Anlreli Zangakatun", "Paruyr Sevak", 1000, 15);
console.log(sevak);
console.log(sevak.author);
// sevak.author = 12;
// console.log(sevak.author);
console.log(sevak.toString());
console.log(sevak.getProfit());
// console.log(karlen.name, sevak.author);
