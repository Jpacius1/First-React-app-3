import React from "react";
import BookCard from "./BookCard";
import { Book } from "../booksData";

interface BookListProps {
  books: Book[];
  deleteBook: (id: number) => void;
  toggleFeatured: (id: number) => void;
}

function BookList({ books, deleteBook, toggleFeatured }: BookListProps) {
  return (
    <div style={{ padding: "10px", flex: 1 }}>
      <h3>Book List</h3>
      <div>
       {books.map((book) => (
          <BookCard 
          key={book.id} 
          book={book} 
          deleteBook={deleteBook}
          toggleFeatured={toggleFeatured}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
