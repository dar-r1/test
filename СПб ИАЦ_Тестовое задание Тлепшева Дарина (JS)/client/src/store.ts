import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReduser from './features/user/redux/userSlice';
import booksReduser from './features/books/redux/BookSlice';

const store = configureStore({
  reducer: { user: userReduser, books: booksReduser },
});

// для правильной типизации будем использовать useAppDispatch вместоuseDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
