import './addbook.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoook } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    id: 0,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoook(book));
    e.target.reset();
  };
  const handleTitleChange = (e) => {
    e.persist();
    const { value } = e.target;
    setBook((e) => ({
      ...e,
      title: value,
    }));
  };
  const handleAuthorChange = (e) => {
    e.persist();
    const { value } = e.target;
    setBook((e) => ({
      ...e,
      author: value,
    }));
  };
  return (
    <div className="addbook-form" onSubmit={handleSubmit}>
      <span> Add New Book</span>
      <form className="form-inputs">
        <input
          placeholder="BookTitile"
          className="input-title"
          onChange={handleTitleChange}
        />
        <input
          placeholder="Author"
          className="input-author"
          onChange={handleAuthorChange}
        />
        <button type="submit" className="input-addbook">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
