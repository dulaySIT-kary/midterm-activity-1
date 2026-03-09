import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/students" style={{ marginRight: '15px' }}>Students</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;