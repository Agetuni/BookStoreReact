/* eslint-disable */
import { reject } from "lodash";
import createBook from "../../services/bookService";

const ADD = "bookstore/books/ADD_BOOK";
const REMOVE = "bookstore/books/REMOVE_BOOK";
const initialState = [
  {
    id: "1s",
    title: "alazar book title",
    author: "alazar",
  },
  {
    id: "2s",
    title: "Reviewer book title",
    author: "Reviewer",
  },
];

const add = (state, data) => {
  console.log(state);
  const boola = createBook(data);
  console.log(boola);
  const bolllas = [...state, boola];
  console.log(bolllas);
  return bolllas;
};
const remove = (state, id) => {
  console.log(`hello ${id}`);
  var data = state.filter((x) => {
    return x.id !== id;
  });
  console.log(state);
  console.log(data);
  return data;
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return add(state, action.data);
    case REMOVE:
      debugger;
      return remove(state, action.id);
    default:
      return state;
  }
};

const addBoook = (data) => ({ type: ADD, data });
const removeBook = (id) => ({ type: REMOVE, id });

export { addBoook, removeBook };
export default reducer;
