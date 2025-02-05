import React from "react";
import BookCard from "./BookCard";
import { Book } from "../booksData";

interface BookListProps {
  books: Book[];
}

function BookList({ books }: BookListProps) {
  return (
    <div style={{ padding: "10px", flex: 1 }}>
      <h3>Book List</h3>
      <div>
       {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
