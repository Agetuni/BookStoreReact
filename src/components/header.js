import './header.css';
import { Link } from 'react-router-dom';
import avator from '../images/avator.jpg';

const Header = () => (
  <div className="header panel-bg">
    <nav className="test">
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
      <div className="ovalheader">
        <p>
          <img className="avator" src={avator} alt="texttttttttttttttttttttttttttt" />
        </p>
      </div>
    </nav>

  </div>
);
export default Header;
