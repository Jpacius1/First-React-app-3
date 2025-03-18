import { useState } from "react";
import Sidebar from "./components/Sidebar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import { Book } from "./booksData";

const initialBooks: Book[] = [
  {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", featured: true },
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", featured: true },
    {id: 3, title: "1984", author: "George Orwell", featured: true },
];

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Create or Update a book
    const saveBook = (book: Book) => {
      if (book.id) {
        // Update existing book
        setBooks(books.map((b) => (b.id === book.id ? book : b)));
      } else {
        // Create new book
        const newBook = { ...book, id: books.length + 1 };
        setBooks([...books, newBook]);
      }
      setSelectedBook(null); // Reset form
    };

    // Delete Book
    const deleteBook = (id: number) => {
      setBooks(books.filter((book) => book.id !== id));
    };

    // Open Edit Form
    const editBook = (book: Book) => {
      setSelectedBook(book);
    }
  
    return (
      <div style={{ display: "flex", padding: "20px" }}>
        <Sidebar />
        <div style={{ flex: 1}}>
          <BookForm saveBook={saveBook} selectedBook={selectedBook} />
        <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
      </div>
    </div>
    );
  }
  
  export default App;

