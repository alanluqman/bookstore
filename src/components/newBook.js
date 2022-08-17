/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  function changeTitle(e) {
    setTitle(e.target.value);
  }
  function changeAuthor(e) {
    setAuthor(e.target.value);
  }
  function sendData() {
    // input validation
    if (title.trim() !== '' && author.trim() !== '') {
      const id = new Date().getTime(); // create a new ID each milliseconds.
      dispatch(addBook({ id, title, author }));
    }
    setTitle('');
    setAuthor('');
  }
  return (
    <>
      <input type="text" placeholder="Book name" value={title} onChange={changeTitle} />
      <input type="text" placeholder="Author" value={author} onChange={changeAuthor} />
      <button type="button" onClick={sendData}>Add</button>
    </>
  );
}

export default NewBook;
