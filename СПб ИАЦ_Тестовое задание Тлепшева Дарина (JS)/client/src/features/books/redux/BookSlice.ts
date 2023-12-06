import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { bookAdd, bookDelete, bookUpdate, requestBooks } from './api';
import BookState from './BookState';
import { Book, BookWithoutId } from '../types/Book';
import { RootState } from '../../../store';

const initialState: BookState = {
  books: [],
  error: undefined,
};

export const loadBooks = createAsyncThunk('books/load', () => {
  return requestBooks();
});

export const deleteBook = createAsyncThunk('books/delete', (id: number) => {
  return bookDelete(id);
});

export const updateBook = createAsyncThunk(
  'books/updateBooks',
  (book: Book) => {
    return bookUpdate(book);
  }
);

export const addBook = createAsyncThunk(
  'books/addBooks',
  (book: BookWithoutId) => {
    return bookAdd(book);
  }
);

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.error = undefined;
    });
    builder.addCase(loadBooks.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      state.error = undefined;
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      state.books = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
      state.error = undefined;
    });
    builder.addCase(updateBook.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books = [...state.books, action.payload];
      state.error = undefined;
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export const selectBooks = (state: RootState): Book[] => state.books.books;

export default BooksSlice.reducer;
