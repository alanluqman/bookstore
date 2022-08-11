import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/books';
import Categories from './components/catigories';
import Navigation from './components/navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
