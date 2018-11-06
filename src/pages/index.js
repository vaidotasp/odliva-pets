import React from 'react';
import Layout from '../components/layout';
import styles from './main.module.css';
import BenefitCard from '../components/BenefitCard';
import AnimalCard from '../components/AnimalCard';

const IndexPage = () => (
  <Layout>
    <div className={styles.hero}>
      <h1>Odliva Doktor Animals</h1>
      <p>
        Natūralus probiotikas skirtas sustiprinti naminių gyvūnų sveikatą ir
        imunitetą.
      </p>
      <button>Call TO Action</button>
    </div>
    <div className={styles.mainPitch}>
      <h1>Naudojimo Rezultatai:</h1>
      <div className={styles.benefitSection}>
        <BenefitCard title="Sustiprina imunitetą" />
        <BenefitCard title="Pagerina virškinimą" />
        <BenefitCard title="Pagerėja išorinė išvaizda (kailis)" />
        <BenefitCard title="Greičiau gyjančios žaizdos" />
        <BenefitCard title="Pašalinami kvapai" />
      </div>
      <h1 className={styles.animalGroupTitle}>Preparatas Pritaikytas:</h1>
      <div className={styles.animalGroupSection}>
        <AnimalCard title="Katės" />
        <AnimalCard title="Šunys" />
        <AnimalCard title="Kiti" />
      </div>
      <button>Skaityti Daugiau</button>
    </div>
  </Layout>
);

export default IndexPage;
