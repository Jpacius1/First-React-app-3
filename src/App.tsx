import React, { useState } from "react";
import Sidebar from "./SideBar";
import BookList from "./components/BookList";
import { Book } from "./booksData";

const intialBooks: Book[] = [
  {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", featured: true },
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", featured: true },
    {id: 3, title: "1984", author: "George Orwell", featured: true },
];

function App() {
  const [books, setBooks] = useState<Book[]>(intialBooks);

  // Create
    const addBook = () => {
      const newBook = {
        id: books.length + 1,
        title: "New Book",
        author: "Unknown Author",
        featured: false, 
      };
      setBooks([...books, newBook]);
    };
  
    // Delete
    const deleteBook = (id: number) => {
      setBooks(books.filter((book) => book.id !== id));
    };
  
    // Update (Toggle "Featured" status)
    const toggleFeatured = (id: number) => {
      setBooks(
       books.map((book) =>
         book.id === id ? { ...book, featured: !book.featured } : book
        )
      );
    };
  
    return (
      <div style={{ display: "flex", padding: "20px" }}>
        <Sidebar addBook={addBook} />
        <BookList books={books} deleteBook={deleteBook} toggleFeatured={toggleFeatured} />
      </div>
    );
  }
  
  export default App;

