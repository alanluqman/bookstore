import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addBook, removeBook } from './redux/books/books';
import store from './redux/configureStore';

store.dispatch(addBook('new book', 'Test')); // test add new book
store.dispatch(removeBook(1)); // test remove a book

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
