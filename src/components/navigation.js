import { Link } from 'react-router-dom';
import './navigation.css';
function Navigation() {
  return (
    <>
      <div className="nav-bar">
        <nav className="nav-container">
          <Link className="logo" to="/">Bookstore CMS</Link>
          <Link className="nav-items" to="/">Books</Link>
          <Link className="nav-items" to="/calculator">Catigories</Link>
        </nav>
        <i className="user fa fa-user"></i>
      </div>
    </>
  );
}

export default Navigation;