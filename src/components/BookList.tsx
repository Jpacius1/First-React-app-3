import React from "react";
import BookCard from "./BookCard";
import { Book } from "../booksData";

interface BookListProps {
  books: Book[];
  deleteBook: (id: number) => void;
  editBook: (book: Book) => void;
}

function BookList({ books, deleteBook, editBook }: BookListProps) {
  return (
    <div>
      <h3>Book List</h3>
       {books.map((book) => (
          <BookCard 
          key={book.id} 
          book={book} 
          deleteBook={deleteBook}
          editBook={editBook}
          />
        ))}
      </div>
  );
}

export default BookList;
