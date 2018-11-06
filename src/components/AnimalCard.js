import React from 'react';
import styles from './components.module.css';

const AnimalCard = props => (
  <div className={styles.animalCard}>
    <img src="" alt="card" />
    <p>{props.title}</p>
  </div>
);
export default AnimalCard;
