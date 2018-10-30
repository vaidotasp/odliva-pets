import React from 'react';
import { Link } from 'gatsby';

const NavLink = props => (
  <li style={{}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Header = () => (
  <nav style={{}}>
    <h1 style={{}}>
      <Link to="/" style={{}}>
        Title/Logo
      </Link>
    </h1>
    <ul style={{}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/info/">Info</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
    </ul>
  </nav>
);

export default Header;
