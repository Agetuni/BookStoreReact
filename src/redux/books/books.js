import createBook from '../../services/bookService';

const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';
const initialState = {
  books: [],
};

const add = (state, data) => [...state.books, createBook(data)];
const remove = (state, bookId) => state.books.filter((x) => x.id !== bookId);
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return add(state, action.data);
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
