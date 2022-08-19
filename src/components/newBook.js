import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './newBook.css';

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
        category: 'Category',
      });
    }
    setTitle('');
    setAuthor('');
  }
  return (
    <div className="add-newBook-holder">
      <h1 className="add-new-heading">Add new Book</h1>
      <div className="input-holder">
        <input className="input input-title" type="text" placeholder="Book title" value={title} onChange={changeTitle} />
        <input className="input input-author" type="text" placeholder="Author" value={author} onChange={changeAuthor} />
        <select className="input" disabled>
          <option value="" style={{ color: '#1212123a' }}>Category</option>
          <option value="Novel">Novel</option>
          <option value="Story">Story</option>
          <option value="Science">Science</option>
        </select>
        <button className="input addNewBtn" type="button" onClick={sendData}>Add Book</button>
      </div>
    </div>
  );
}

export default NewBook;
