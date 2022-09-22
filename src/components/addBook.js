import './addbook.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookApi } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: 'Fiction',
    item_id: 0,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    dispatch(addBookApi(book));
    e.target.reset();
  };
  const handleTitleChange = (e) => {
    e.persist();
    const { value } = e.target;
    setBook((e) => ({
      ...e,
      item_id: uuid(),
      title: value,
    }));
  };
  const handleAuthorChange = (e) => {
    e.persist();
    const { value } = e.target;
    setBook((e) => ({
      ...e,
      item_id: uuid(),
      author: value,
    }));
  };
  return (
    <div className="addbook-form">
      <span> Add New Book</span>
      <form className="form-inputs" onSubmit={handleSubmit}>
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
