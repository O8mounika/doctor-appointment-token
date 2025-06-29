import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f8f8f8" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/dashboard" style={{ marginRight: "1rem" }}>Dashboard</Link>
      <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
