import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <>
      <div className="nav-bar">
        <nav className="nav-container">
          <div>
            <Link className="logo" to="/">Bookstore CMS</Link>
            <Link className="nav-items" to="/">HOME</Link>
            <Link className="nav-items" to="/categories">CATEGORIES</Link>
          </div>
          <i className="user fa fa-user" />
        </nav>
      </div>
    </>
  );
}

export default Navigation;
