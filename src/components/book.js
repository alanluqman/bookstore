/* eslint-disable react/prop-types */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './book.css';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sPebu2dL8D3Eo32zfpOG/books/';
  async function remove(id) {
    dispatch(removeBook(id));
    await axios.delete(`${api}${id}`);
  }
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={() => remove(id)}>Remove</button>
    </div>
  );
}

export default Book;
