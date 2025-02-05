import React, { useState } from "react";
import SideBar from "./SideBar";
import BookList from "./components/BookList";
import booksData, { Book } from "./booksData";

function App() {
  const [books, setBooks] = useState<Book[]>(booksData);

  const addBook = (newBook: Omit<Book, "id">) => {
    setBooks([...books, {id: books.length +1, ...newBook }]);
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <SideBar addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;

