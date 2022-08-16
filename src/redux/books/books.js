const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const lastId = 0;
export default function addRemoveReducer(state = [], action) {
  switch (action.type) {
    // add action
    case ADD_BOOK: return [
      ...state, {
        id: lastId + 1,
        title: action.title,
      },
    ];
    // remove action
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    // unknown action
    default: return state;
  }
}

export const addBook = (title) => ({
  type: ADD_BOOK,
  title,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
