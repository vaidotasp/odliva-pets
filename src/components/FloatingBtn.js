import React from 'react';
import { Link } from 'gatsby';
import styles from './components.module.css';

const FloatingBtn = () => (
  <Link to="/contact">
    <button className={styles.floatingBtn}>?</button>
  </Link>
);

export default FloatingBtn;
