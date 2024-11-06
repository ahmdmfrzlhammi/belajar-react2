import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/todo" className="nav-link">Study Cases</Link>
      </div>
    </nav>
  );
}

export default Navbar;