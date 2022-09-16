import './books.css';
import Book from './book';
import AddBook from './addBook';

const Books = () => (
  <div className="books">
    <Book title="abcd" author="def" />
    <AddBook />
  </div>
);
export default Books;
