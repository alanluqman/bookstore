/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './book.css';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
}

export default Book;
