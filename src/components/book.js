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
  const precentage = Math.floor(Math.random() * 100);
  return (
    <div className="book ">
      <div style={{ width: '100%' }}>
        <h2 className="category">Category</h2>
        <h1 className="title">{title}</h1>
        <h3 className="author">{author}</h3>
        <div className="d-flex action-holder">
          <button className="actionBtn" type="button">Comments</button>
          <button className="actionBtn" type="button" onClick={() => remove(id)}>Remove</button>
          <button className="actionBtn" type="button">Edit</button>
        </div>
      </div>
      <div className="d-flex align-center completion-holder" style={{ width: '50%' }}>
        <svg>
          <circle className="bg" cx="35" cy="35" r="30" />
          <circle className="meter" cx="35" cy="35" r="30" style={{ strokeDashoffset: 360 - (precentage * 1.85) }} />
        </svg>
        <div>
          <p className="precentage">
            {precentage}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div style={{ width: '50%', paddingLeft: '40px', borderLeft: '1px solid #1212123a' }}>
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">
          Chapter
          {
            Math.floor(precentage / 10)
          }
        </p>
        <button className="update-progress" type="button">update process</button>
      </div>
    </div>
  );
}

export default Book;
