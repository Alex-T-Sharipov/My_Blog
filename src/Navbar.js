import {Link } from 'react-router-dom'

// sfc tab: stateless functional component
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" style={{
            color: "white",
            backgroundColor: "#c17000",
            borderRadius: "8px",
          }}>New Blog </Link>
      </div>
    </nav>
  );
}
 
export default Navbar;