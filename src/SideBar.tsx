import React from "react";

interface SidebarProps {
  addBook: () => void;
}

function Sidebar({ addBook }: SidebarProps) {
  return (
    <div style={{ padding: "10px", borderRight: "1px solid gray" }}>
      <h3>Manage Books</h3>
      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default Sidebar;