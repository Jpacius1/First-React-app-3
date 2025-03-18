import axios from 'axios'

const API_URL = "https://jsonplaceholder.typicode.com/posts";


// Fetch all books
export const getBooks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};

// Add a new book
export const addBook = async (book: {title: string; body: string}) => {
    try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
  } 
};

export const updateBook = async (id: number, book: { title: string; body: string }) => {
    try {
    const response= await axios.put(`${API_URL}/${id}`, book); 
        return response.data;
    } catch(error) {
        console.error('Error updating book:', error);
    }
};
   
// Delete a book
export const deleteBook = async (id: number) => {
    try {
    await axios.delete(`${API_URL}/${id}`)
    return id;
    }catch (error) {
        console.error('Error deleting book:', error);
    }
};