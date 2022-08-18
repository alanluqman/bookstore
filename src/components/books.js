/* eslint-disable max-len */
/* eslint-disable prefer-const */
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/books/books';
import Book from './book';
import './books.css';
import NewBook from './newBook';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sPebu2dL8D3Eo32zfpOG/books/';
  useEffect(() => async () => {
    const data = await axios.get(api).then((response) => response.data);
    let newData = [];
    Object.keys(data).forEach((item) => {
      newData.push({
        id: parseInt(item, 10),
        title: data[item][0].title,
        author: data[item][0].author,
        category: data[item][0].category,
      });
    });
    dispatch(fetchData(newData));
  }, []);

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
