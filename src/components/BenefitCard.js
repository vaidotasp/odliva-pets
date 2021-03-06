import React from 'react';
import styles from './components.module.css';

const BenefitCard = props => (
  <div className={styles.benefitCard}>
    <img src={props.img} alt="card" />
    <p>{props.title}</p>
  </div>
);
export default BenefitCard;
