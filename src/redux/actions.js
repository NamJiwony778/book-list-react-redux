import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from './types';

export const addBook = (book) => ({ 
  type: ADD_BOOK,
  payload:book
});

export const updateBook = (updatedBook) => ({ 
  type: UPDATE_BOOK,
  payload:updatedBook
});

export const deleteBook = (selectedBook) => ({
  type: DELETE_BOOK,
  payload: selectedBook
});