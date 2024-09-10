import React from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBook } from './layouts/SearchBooksPage/components/SearchBook';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Switch, Redirect } from 'react-router-dom';


export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route path='/' exact> {/* exact keyword says if the path is exactly '/' then redirect, not if it is '/smthing' */ }
          <Redirect to='/home' />
        </Route>

        <Route path='/home'>
          <HomePage />
        </Route>

        <Route path='/search'>
          <SearchBooksPage />
        </Route>


      </Switch>
      <Footer />
    </div>
  );
}

