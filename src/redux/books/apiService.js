import axios from 'axios';
import { addBoook } from './books';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'wIcNq0sQOGNWQAAoJURH';
const baseUrl = axios.create({ baseURL: `${url}/${appId}` });
const getBookApi = () => (dispatch) => {
  baseUrl.get('/books').then((res) => {
    dispatch(addBoook(res.data));
  });
};
const removeBookApi = (ID) => (dispatch) => {
  baseUrl.delete(`/books/${ID}`, { item_id: ID }).then(() => {
    dispatch(getBookApi());
  });
};

const addBookApi = (book) => (dispatch) => {
  axios({
    method: 'POST',
    url: `${url}/${appId}/books/`,
    data: {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Action',
    },
  }).then(() => {
    dispatch(getBookApi());
  });
};
export { getBookApi, addBookApi, removeBookApi };
