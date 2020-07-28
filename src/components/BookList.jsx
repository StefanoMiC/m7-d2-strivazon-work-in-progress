import React from "react";
import Book from "./Book";
export default ({ books }) => (
  <ul>
    {books.map((book, index) => (
      <Book {...book} key={index} />
    ))}
  </ul>
);
