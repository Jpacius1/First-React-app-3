import React, { useEffect, useState } from 'react';
import { getBooks, addBook, updateBook, deleteBook } from './api';

interface Book {
  id: number;
  title: string;
  body: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  

  // Fetch books on load 
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
      const data = await getBooks();
      setBooks(data.slice(0,10)); // Limit to 10 for display
    } catch (error) {
      setError('Failed to load books');  
    } finally {
      setLoading(false);
    }
  };
    fetchBooks();
  }, []);

  // Add book
  const handleAddBook = async () => {
    const newBook = { title: 'New Book', body: 'Book description' };
    try {
    const addedBook = await addBook(newBook);
    if (addedBook) {
      setBooks([...books, addedBook]); // Optimistically add the book
    }
  } catch (error) {
    setError('Failed to add book');
   } finally{
    setLoading(false);
   }

 };

  // Update book
  const handleUpdateBook = async (id: number) => {
    const updatedBook = {title: 'Updated Book Title', body: 'Updated description' };
    setBooks(books.map(book => (book.id === id ? { ...book, ...updatedBook } : book))); // Optimistically update
    try {
    const result = await updateBook(id, updatedBook);
    if (result) {
      setBooks(books.map(book => (book.id === id ? result : book)));
    }
  } catch (error) {
    setError('Failed to update book');
    }
  };

  // Delete book
  const handleDeleteBook = async (id: number) => {
    setBooks(books.filter(book => book.id !== id)); // Optimistically remove the book
    try{
      await deleteBook(id);
    } catch (error) {
      setError('Failed to delete book');
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      {error && <p style={{ color: 'red'}}>{error}</p>}
      <button onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ marginBottom: '10px'}}>
            <strong>{book.title}</strong> - {book.body}
            <button onClick={() => handleUpdateBook(book.id)} style={{ marginLeft: '10px' }}>Edit</button>
            <button onClick={() => handleDeleteBook(book.id)} style={{ marginLeft: '5px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
