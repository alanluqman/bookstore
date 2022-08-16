const CHECK = 'bookstore/categories/CHECK';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return 'Under construction.';
    default: return state;
  }
}

export const checkCategories = () => ({
  type: CHECK,
});
