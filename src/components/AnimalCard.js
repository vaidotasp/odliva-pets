import React from 'react';
import styles from './components.module.css';

const AnimalCard = props => (
  <div className={styles.animalCard}>
    <img src={props.img} alt="animal-picture" />
    <p>{props.title}</p>
  </div>
);
export default AnimalCard;
