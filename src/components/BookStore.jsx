import React, { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { books } from "../data/books";

class BookStore extends Component {
  render() {
    return (
      <div className="row">
        <BookList books={books} />
        <BookDetail books={books} />
      </div>
    );
  }
}

export default BookStore;
