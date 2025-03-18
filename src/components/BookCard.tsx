import { Book } from "../booksData";

interface BookCardProps {
  book: Book;
  deleteBook: (id: number) => void;
  editBook: (book: Book) => void;
}

function BookCard ({ book, deleteBook, editBook }: BookCardProps) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>
      <p>Status: {book.featured ? "Featured" : "Not Featured"}</p>
      <button onClick={() => editBook(book)}>Edit</button>
      <button onClick={() => deleteBook(book.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default BookCard;
