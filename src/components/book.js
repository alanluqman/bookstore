/* eslint-disable react/prop-types */
import './book.css';

function Book({ title, author }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

export default Book;
