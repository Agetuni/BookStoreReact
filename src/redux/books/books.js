/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { keys } from 'lodash';
import status from '../status';

const createBook = (data) => ({
  item_id: data.id,
  ...data,
});
const domain = 'bookstore/books';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const systemId = 'wIcNq0sQOGNWQAAoJURH';
const endPoint = `${baseURL}/apps/${systemId}/books`;
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};
const getBookApi = createAsyncThunk(
  `${domain}/getBookApi`,
  async () => {
    const res = await axios.get(endPoint, config);
    return res.data;
  },
);
const addBookApi = createAsyncThunk(
  `${domain}/ADDBOOK`,
  async (data, thunkAPI) => {
    const book = createBook(data);
    const res = await axios.post(endPoint, book, config);
    const resStatus = {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
    if (resStatus.status === 201) thunkAPI.dispatch(getBookApi());
    return resStatus;
  },
);
const endPointBookId = (itemId) => `${endPoint}/${itemId}`;

const removeBookApi = createAsyncThunk(
  `${domain}/DELETEBOOK`,
  async (itemId, thunkAPI) => {
    const res = await axios.delete(endPointBookId(itemId), config);

    const resStatus = {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
    if (resStatus.status === 201) thunkAPI.dispatch(getBookApi());
    return resStatus;
  },
);

const booksSlice = createSlice({
  name: domain,
  initialState: {
    loading: status.idle,
    books: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookApi.pending, (state) => {
        state.loading = status.pending;
      })
      .addCase(getBookApi.fulfilled, (state, action) => {
        state.loading = status.succeeded;
        const BooksIds = keys(action.payload);
        state.books = BooksIds.map((item_id) => ({
          item_id,
          ...action.payload[item_id][0],
        }));
      })
      .addCase(getBookApi.rejected, (state) => {
        state.loading = status.failed;
      })
      .addCase(addBookApi.pending, (state) => {
        state.loading = status.pending;
      })
      .addCase(addBookApi.fulfilled, (state) => {
        state.loading = status.succeeded;
      })
      .addCase(addBookApi.rejected, (state) => {
        state.loading = status.failed;
      })
      .addCase(removeBookApi.pending, (state) => {
        state.loading = status.pending;
      })
      .addCase(removeBookApi.fulfilled, (state) => {
        state.loading = status.succeeded;
      })
      .addCase(removeBookApi.rejected, (state) => {
        state.loading = status.failed;
      });
  },
});

const { actions, reducer } = booksSlice;
export {
  actions, getBookApi, addBookApi, removeBookApi,
};
export default reducer;
