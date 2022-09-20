import createBook from "../../services/bookService";
const ADD = "ADD";
const REMOVE = "REMOVE";
const initialState = {
  books: [],
};

const add = (state, data) => {
  books: [...state.books, createBook(data)];
};
const remove =(bookId) => {
    books= books.filter(x=>x.id!== bookId);
}
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return add(state,actin.data);
    case REMOVE:
      return remove(state);
    default:
      return state;
  }
};

const addBoook = (data) => ({ type: ADD, data });
const removeBook = (bookId) => ({ type: REMOVE, bookId });

export { addBoook, removeBook };
export default reducer;
