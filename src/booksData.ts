export interface Book {
    id: number,
    title: string;
    author: string,
}

const booksData: Book[] = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    {id: 3, title: "1984", author: "George Orwell" },
];

export default booksData;