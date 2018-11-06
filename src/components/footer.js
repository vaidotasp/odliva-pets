import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <h1 className={styles.footerTitle}>Kontaktai</h1>
    <div className={styles.footerContent}>
      UAB Odliva yra oficiali prekybos ir paslaugų įmonės Eko-Natural atstovė ir
      produktų platintoja Lietuvos, Latvijos, Estijos ir Baltarusijos rinkoms.
      Eko-Natural turi daugiau kaip dešimtmetį trunkančią darbo patirtį kuriant
      plataus spektro produktus skirtus žemės ūkiui, gyvulininkystei ir aplinkos
      apsaugai. Telefonas: (370) 687 50650 -- (370) 614 24459 Elektroninis
      Paštas: uabodliva@gmail.com [Uzsakymai]
    </div>
    <div>[TERMS]</div>
  </footer>
);

export default Footer;
