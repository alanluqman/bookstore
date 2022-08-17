const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const initialData = [{ id: 1, title: 'First book', author: 'alan' }];
export default function addRemoveReducer(state = initialData, action) {
  switch (action.type) {
    // add action
    case ADD_BOOK: return [
      ...state, action.payload,
    ];
    // remove action
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    // unknown action
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
