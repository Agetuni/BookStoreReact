import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import Books from './components/books';
import Category from './components/category';
import './App.css';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="Bookstore-CMS">
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/catagory" element={<Category />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
