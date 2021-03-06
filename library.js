// const Library = function (books = []) {
//   this.books = books;
// };

// const Book = require("./book");

import Book from './book';

class Library {
  constructor(books = []){
    this.books = books;
  }

  // Library.prototype.bookCount = function () {
  //   return this.books.length;
  // };

get bookCount() {
  return this.bookCount;
  }

  bookCount(){
    return this.books.length;
  }

// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };

  addBook(newBook){
    this.books.push(newBook);
  }

// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  }

// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };
  printInventory(){
    this.books.forEach((author, title) => {
      console.log(`${title} by ${author}`);
    })
  }
}
const books = [
  new Book('J R R Tolkien', 'The Fellowship of the Ring', 'Fantasy'),
  new Book('J R R Tolkien', 'The Two Towers', 'Fantasy'),
  new Book('J R R Tolkien', 'The Return of the King', 'Fantasy')
];

let library = new Library;
library.addBooks(books);

library.printInventory();
// In terminal: node library.js

// module.exports = Library;

export default Library;
