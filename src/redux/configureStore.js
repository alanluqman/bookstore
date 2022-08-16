import { configureStore } from '@reduxjs/toolkit';
import addRemoveReducer from './books/books';

const store = configureStore({ reducer: addRemoveReducer });
// subscribe store to monitor state changes
store.subscribe(() => {
  console.log('Store changed ! ', store.getState());
});
export default store;
