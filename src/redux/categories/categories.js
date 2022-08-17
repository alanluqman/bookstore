const CHECK = 'bookstore/categories/underConstruction';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return 'Under construction.';
    default: return state;
  }
}

export const underConstruction = () => ({
  type: CHECK,
});
