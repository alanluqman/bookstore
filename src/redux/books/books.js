const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
export default function addRemoveReducer(state = [], action) {
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
