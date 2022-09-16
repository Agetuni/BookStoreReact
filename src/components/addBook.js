import './addbook.css';

const AddBook = () => (
  <div className="addbook-form">
    <span> Add New Book</span>
    <div className="form-inputs">
      <input placeholder="BookTitile" className="input-title" />
      <input placeholder="Author" className="input-author" />
      <button type="button" className="input-addbook">Add Book</button>
    </div>
  </div>
);

export default AddBook;
