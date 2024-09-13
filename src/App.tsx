import React, { useEffect, useState } from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBook } from './layouts/SearchBooksPage/components/SearchBook';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import SignInPage from './layouts/SignInPage/SignInPage';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />

          <Route path='/home' element={<HomePage />} />

          <Route path='/search' element={<SearchBooksPage />} />

          <Route path='/signin' element={<SignInPage setIsAuthenticated={setIsAuthenticated} />} />

          <Route path='/checkout/:bookId' element={<BookCheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
