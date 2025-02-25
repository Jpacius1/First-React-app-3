import React, { useState, useEffect } from "react";
import { Book } from "../booksData";

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
        saveBook({ id: selectedBook?.id || 0, title, author });
     };

     return (
        <form onSubmit={handleSubmit} style={{marginBottom: "20px" }}>
            <h3>{selectedBook ? "Edit Book" : "Add a New Book"} </h3>
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
        </form>
     );
   }
export default BookForm;