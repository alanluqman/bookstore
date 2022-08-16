import { configureStore } from '@reduxjs/toolkit';
import addRemoveReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({ reducer: { books: addRemoveReducer, category: categoriesReducer } });
// subscribe store to monitor state changes
store.subscribe(() => {
  console.log('Store changed ! ', store.getState());
});
export default store;
