import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Books from './components/books';
import Category from './components/category';
import './App.css';

function App() {
  return (
    <div className="Bookstore-CMS">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/catagory" element={<Category />} />
      </Routes>
    </div>
  );
}
export default App;
