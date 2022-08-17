/* eslint-disable max-len */
// import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import './books.css';
import NewBook from './newBook';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="books-holder">
        {books.map((book) => <Book key={book.id} id={book.id} title={book.title} author={book.author} />)}
      </div>
      <hr />
      <NewBook />
    </>
  );
}

export default Books;
