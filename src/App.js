import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Books from './components/books';
import Categories from './components/catigories';
import Navigation from './components/navigation';
import store from './redux/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/categories" element={<Categories />} />
            <Route path="/" element={<Books />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
