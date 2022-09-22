const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';
const initialState = [];
const remove = (state, id) => {
  const data = state.filter((x) => x.id !== id);
  return data;
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD: {
      return action.data;
    }
    case REMOVE:
      return remove(state, action.id);
    default:
      return state;
  }
};

const addBoook = (data) => ({ type: ADD, data });
const removeBook = (id) => ({ type: REMOVE, id });

export { addBoook, removeBook };
export default reducer;
