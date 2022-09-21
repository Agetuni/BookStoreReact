import './books.css';
import { useSelector } from 'react-redux';
import Book from './book';
import AddBook from './addBook';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div className="books">
      {bookList.map((b) => (
        <Book
          key={b.id + b.title}
          title={b.title}
          author={b.author}
          id={b.id}
        />
      ))}
      <AddBook />
    </div>
  );
};
export default Books;
