import React from 'react';
import Img from 'gatsby-image';
import styles from './components.module.css';

const AnimalCard = props => (
  <div className={styles.animalCard}>
    <Img
      fluid={props.img}
      style={{
        width: 190,
        height: 190,
        borderRadius: 100,
      }}
    />
    <p>{props.title}</p>
  </div>
);
export default AnimalCard;
