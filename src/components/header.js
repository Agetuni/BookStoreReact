import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="panel-bg">
    <span className="nav-logo">Bookstore CMS</span>
    <ul>
      <li>
        <Link to="/" className="nav-books"> Books</Link>
      </li>
      <li>
        <Link to="/category" className="nav-category">Category</Link>
      </li>
    </ul>
  </nav>
);
export default Header;
