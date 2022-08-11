/* eslint-disable max-len */
import { useState } from 'react';
import Book from './book';
import './books.css';

function Books() {
  const [books] = useState([{ id: 'book1', title: 'hello', author: 'rex' }, { id: 'book2', title: 'GoodBye', author: 'alan' }]);
  return (
    <>
      <div className="books-holder">
        {books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
      </div>
      <hr />
    </>
  );
}

export default Books;
