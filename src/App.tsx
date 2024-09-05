import React from 'react';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import './App.css';
import { ExploreTopBooks } from './layouts/NavbarAndFooter/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/NavbarAndFooter/HomePage/Carousel';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </div>
  );
}

export default App;
