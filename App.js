import React, { useState } from "react";
import sideBar from ".components/sideBar";
import BookList from "./components/BookList";
import booksData from "./booksData"; 

function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = (newBook) => {
    setBooks([...books, {id: books.length +1, ...newBook}]);
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <sideBar addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;

