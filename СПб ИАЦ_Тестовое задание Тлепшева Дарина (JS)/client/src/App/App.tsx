import React, { useState, useEffect } from 'react';
import './App.css';
import { useAppDispatch } from '../store';
import { check } from '../features/user/redux/userSlice';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import RegisterFormPage from '../features/user/components/RegisterFormPage';
import LoginFormPage from '../features/user/components/LoginFormPage';
import BooksTable from '../features/books/components/BooksTable';
import UpdatePage from '../features/books/components/UpdatePage';
import BookAdd from '../features/books/components/BookAdd';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(check());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<BooksTable />} />
          <Route path="//update/:id" element={<UpdatePage />} />
          <Route path="/auth/register" element={<RegisterFormPage />} />
          <Route path="/auth/login" element={<LoginFormPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
