import React from "react";

function BookCard ({ book }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>
    </div>
  );
}

export default BookCard;
