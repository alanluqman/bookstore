import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import addRemoveReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({ books: addRemoveReducer, category: categoriesReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
// subscribe store to monitor state changes
store.subscribe(() => {
  console.log('Store changed ! ', store.getState());
});
export default store;
