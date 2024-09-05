import React from 'react';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import './App.css';
import { ExploreTopBooks } from './layouts/NavbarAndFooter/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/NavbarAndFooter/HomePage/Carousel';
import { Heros } from './layouts/NavbarAndFooter/HomePage/Heros';
import { LibraryServices } from './layouts/NavbarAndFooter/HomePage/LibraryServices';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
    </div>
  );
}

export default App;
