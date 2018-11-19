import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary custom_nav">
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <Link className="nav-link" to="/">Grocery</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
