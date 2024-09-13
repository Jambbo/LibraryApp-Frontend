import React from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBook } from './layouts/SearchBooksPage/components/SearchBook';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import SignInPage from './layouts/SignInPage/SignInPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Routes>
          {/* Redirecting '/' to '/home' */}
          <Route path='/' element={<Navigate to='/home' />} />

          {/* Home page */}
          <Route path='/home' element={<HomePage />} />

          {/* Search books page */}
          <Route path='/search' element={<SearchBooksPage />} />

          <Route path='/signin' element={<SignInPage/>}/>

          {/* Checkout page with dynamic parameter */}
          <Route path='/checkout/:bookId' element={<BookCheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
