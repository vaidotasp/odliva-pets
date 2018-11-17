import React from 'react';
import { Link } from 'gatsby';

import styles from './components.module.css';

const OrderBtn = () => (
  <Link to="/contact">
    <button className={styles.orderBtn}>Užsisakyti</button>
  </Link>
);
export default OrderBtn;
