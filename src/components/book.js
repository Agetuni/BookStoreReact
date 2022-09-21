import './book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    const bookId = e.target.id;
    dispatch(removeBook(bookId));
  };
  const {
    id, key, title, author,
  } = props;
  return (
    <div className="book-card">
      <div className="book-category">
        <span>Action</span>
      </div>
      <div className="book-title">
        <span>{title}</span>
      </div>
      <div className="book-author">
        <span>{author}</span>
      </div>
      <div className="reaction">
        <ul>
          <li>
            <button type="button" id={key}>
              Comments
            </button>
          </li>
          <li>
            {' '}
            <button type="button" id={id} onClick={handleRemove}>Remove</button>
          </li>
          <li>
            {' '}
            <button type="button">edit</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
