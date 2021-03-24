import { ADD_BOOK, DELETE_BOOK } from './types';

export const addBook = (book) => ({ 
  type: ADD_BOOK,
  payload:book
});

export const deleteBook = (selectedBook) => ({
  type: DELETE_BOOK,
  payload: selectedBook,
});