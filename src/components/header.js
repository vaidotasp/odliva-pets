import React from 'react';
import { Link, graphql } from 'gatsby';
import styles from './header.module.css';
import logo from '../images/logo-big.svg';

const NavLink = props => (
  <li className={styles.navlink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Header = () => (
  <>
    <div className={styles.subnav}>
      <p>Telefonas: (370) 687 50650</p>
      <p>Elektroninis Paštas: uabodliva@gmail.com</p>
    </div>
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.navTitle}>
        <Link to="/">Probiotikai Naminiams Gyvūnams</Link>
      </h1>
      <ul>
        <NavLink to="/">apie</NavLink>
        <NavLink to="/info/">informacija</NavLink>
        <NavLink to="/contact/">kontaktai</NavLink>
      </ul>
    </nav>
  </>
);

export default Header;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
