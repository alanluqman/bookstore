import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sPebu2dL8D3Eo32zfpOG/books/';

  function changeTitle(e) {
    setTitle(e.target.value);
  }
  function changeAuthor(e) {
    setAuthor(e.target.value);
  }
  async function sendData() {
    // input validation
    if (title.trim() !== '' && author.trim() !== '') {
      const id = new Date().getTime(); // create a new ID each milliseconds.
      dispatch(addBook({ id, title, author }));
      await axios.post(api, {
        item_id: id,
        title,
        author,
        category: 'under construction',
      });
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
