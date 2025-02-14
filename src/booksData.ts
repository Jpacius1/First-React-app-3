export interface Book {
    id: number,
    title: string;
    author: string,
    featured: boolean;
}

const booksData: Book[] = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", featured: true },
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", featured: true },
    {id: 3, title: "1984", author: "George Orwell", featured: true },
];

export default booksData;