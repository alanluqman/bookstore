const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const lastId = 0;
export default function addRemoveReducer(state = [], action) {
  switch (action.type) {
    // add action
    case ADD_BOOK: return [
      ...state, {
        id: lastId + 1,
        title: action.title,
        author: action.author,
      },
    ];
    // remove action
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    // unknown action
    default: return state;
  }
}

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
