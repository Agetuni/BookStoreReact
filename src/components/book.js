import './book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    const bookId = e.target.id;
    dispatch(removeBookApi(bookId));
  };
  const {
    id, key, title, author,
  } = props;
  return (
    <div className="book-card">
      <div className="bookDetail">
        <div className="book-category">
          <span>Action</span>
        </div>
        <div className="book-title">
          <span>{title}</span>
        </div>
        <div className="book-author">
          <span>{author}</span>
        </div>
        <ul className="reaction">
          <li>
            <button type="button" className="left buttons" id={key}>
              Comments
            </button>
          </li>
          <li>
            {' '}
            <button
              type="button"
              id={id}
              className="left buttons"
              onClick={handleRemove}
            >
              Remove
            </button>
          </li>
          <li>
            {' '}
            <button className="buttons" type="button">edit</button>
          </li>
        </ul>
      </div>
      <div className="percentage">
        <div className="oval" />
        <div className="completed">
          <span className="percent-value">65%</span>
          <span className="percent-compeleted">Completed</span>
        </div>
      </div>
      <div className="progress">
        <span className="currentChapter">CURRENT CHAPTER</span>
        <span className="chapter">Chapter 17</span>
        <button type="button" className="update"> UPDATE PROGRESS</button>
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
