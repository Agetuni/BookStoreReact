/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { keys } from 'lodash';
import status from '../status';

const createBook = (data) => ({
  item_id: data.id,
  ...data,
});

// actions CONSTANTS
const ACTION_PREPEND = 'bookstore/books';
const BASEURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APPID = 'wIcNq0sQOGNWQAAoJURH';
const ENDPOINTBOOKS = `${BASEURL}/apps/${APPID}/books`;

// ASYNC REDUCERS

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

// getBookApi
const getBookApi = createAsyncThunk(
  `${ACTION_PREPEND}/getBookApi`,
  async () => {
    const res = await axios.get(ENDPOINTBOOKS, config);
    return res.data;
  },
);
const addBookApi = createAsyncThunk(
  `${ACTION_PREPEND}/ADDBOOK`,
  async (data, thunkAPI) => {
    const book = createBook(data);
    console.log('hello');
    console.log(book);
    const res = await axios.post(ENDPOINTBOOKS, book, config);
    const resStatus = {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
    if (resStatus.status === 201) thunkAPI.dispatch(getBookApi());
    return resStatus;
  },
);
const endPointBookId = (itemId) => `${ENDPOINTBOOKS}/${itemId}`;

const removeBookApi = createAsyncThunk(
  `${ACTION_PREPEND}/DELETEBOOK`,
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
  name: ACTION_PREPEND,
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
