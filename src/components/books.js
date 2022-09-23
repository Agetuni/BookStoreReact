import './books.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import AddBook from './addBook';
import { getBookApi } from '../redux/books/books';
import status from '../redux/status';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.books);
  const load = useSelector((state) => state.books.loading);
  useEffect(() => {
    if (load === status.idle) dispatch(getBookApi());
  }, [dispatch]);
  return (
    <div className="books">
      {
        bookList.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            id={book.item_id}
          />
        ))
      }
      <AddBook />
    </div>
  );
};
export default Books;
