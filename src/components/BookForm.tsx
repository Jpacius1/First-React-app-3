import React, { useState, useEffect } from "react";
import { Book } from "../booksData"

interface BookFormProps {
    saveBook: (book: Book) => void;
    selectedBook: Book | null; 
}

const BookForm: React.FC<BookFormProps> = ({ saveBook, selectedBook }) => {
    const [title, setTitle] = useState<string>(selectedBook ? selectedBook.title : "");
    const [author, setAuthor] = useState<string>(selectedBook ? selectedBook.author : "");



    // Populate form when editing
    useEffect(() => {
        if (selectedBook) {
            setTitle(selectedBook.title);
            setAuthor(selectedBook.author);
        } else {
            setTitle("");
            setAuthor("");
        }
     },[selectedBook]); 

     const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        saveBook({
            id: selectedBook ? selectedBook.id : Date.now(),
            title,
            author,
            featured: false
        });
        setTitle(""); // Clear form after submission
        setAuthor("");
     };

     return (
        <form onSubmit={handleSubmit} style={{marginBottom: "20px" }}>
            <h3>{selectedBook ? "Edit Book" : "Add a New Book"} </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            /> 
            <button type="submit">{selectedBook ? "Update Book" : "Add Book"}</button>
            </div>
        </form>
     );
   }
export default BookForm;