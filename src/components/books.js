import './books.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import AddBook from './addBook';
import { getBookApi } from '../redux/books/apiService';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookApi());
  }, [dispatch]);
  const bookList = useSelector((state) => state.books);
  return (
    <div className="books">
      {Object.keys(bookList).map((book) => {
        const currentbook = bookList[book][0];
        return (
          <Book
            key={book}
            title={currentbook.title}
            author={currentbook.author}
            id={book}
          />
        );
      })}
      <AddBook />
    </div>
  );
};
export default Books;
