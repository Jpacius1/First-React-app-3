import React from "react";
import { Book } from "../booksData";

interface BookCardProps {
  book: Book;
}

function BookCard ({ book }: BookCardProps) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>
    </div>
  );
}

export default BookCard;
