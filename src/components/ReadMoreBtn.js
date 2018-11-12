import React from 'react';
import { Link } from 'gatsby';

import styles from './components.module.css';

const ReadMoreBtn = () => (
  <Link to="/info">
    <button className={styles.readMoreBtn}>Skaityti Daugiau</button>
  </Link>
);
export default ReadMoreBtn;
