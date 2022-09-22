import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="panel-bg">
      <span className="nav-logo">Bookstore CMS</span>
      <ul>
        <li>
          <Link to="/" className="nav-books">
            {' '}
            Books
          </Link>
        </li>
        <li>
          <Link to="/catagory" className="nav-category">
            Category
          </Link>
        </li>
      </ul>
    </nav>
    <div>
      <div className="ovalheader" />
    </div>
  </div>
);
export default Header;
