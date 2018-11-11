import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styles from './main.module.css';
import BenefitCard from '../components/BenefitCard';
import AnimalCard from '../components/AnimalCard';
import ReadMoreBtn from '../components/ReadMoreBtn';
import FloatingBtn from '../components/FloatingBtn';

const pics = {
  cat_small:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/D7qe-cat-small.jpg',
  dog_small:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/JzvT-dog-small.jpg',
  parrot_small:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/8iUM-parrot-small.jpg',
  rabbit_small:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/o64t-rabbit-small.jpg',
  immunity_card:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/NXVv-020-heart.svg',
  smell_card:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/KIeK-002-dog-smelling-dog.svg',
  wound_card:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/PEpx-011-patch-1.svg',
  digestion_card:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/euFT-015-bone.svg',
  fur_card:
    'https://uploads.codesandbox.io/uploads/user/b006de2a-c0ab-49ad-9183-ab410f72fbf6/jL2k-012-pet.svg',
};
const IndexPage = props => (
  <Layout>
    <section>
      <Img
        className={styles.hero}
        fluid={props.data.imageHero.childImageSharp.fluid}
      />
      <div className={styles.heroInner}>
        <h1>Odliva Doktor Animals</h1>
        <p>
          Natūralus probiotikas skirtas sustiprinti naminių gyvūnų sveikatą ir
          imunitetą.
        </p>
        <ReadMoreBtn />
      </div>
    </section>
    <div className={styles.mainPitch}>
      <h1>Naudojimo Rezultatai:</h1>
      <div className={styles.benefitSection}>
        <BenefitCard title="1. Sustiprina imunitetą" img={pics.immunity_card} />
        <BenefitCard title="2. Pagerina virškinimą" img={pics.digestion_card} />
        <BenefitCard
          title="3. Pagerėja išorinė išvaizda (kailis)"
          img={pics.fur_card}
        />
        <BenefitCard
          title="4. Greičiau gyjančios žaizdos"
          img={pics.wound_card}
        />
        <BenefitCard title="5. Pašalinami kvapai" img={pics.smell_card} />
      </div>
      <h1 className={styles.animalGroupTitle}>Preparatas Pritaikytas:</h1>
      <div className={styles.animalGroupSection}>
        <AnimalCard title="Katės" img={pics.cat_small} />
        <AnimalCard title="Šunys" img={pics.dog_small} />
        <AnimalCard title="Triušiai" img={pics.rabbit_small} />
        <AnimalCard title="Papūgos" img={pics.parrot_small} />
      </div>
      <ReadMoreBtn />
    </div>
    <FloatingBtn />
  </Layout>
);

export const pageQuery = graphql`
  query {
    imageHero: file(relativePath: { eq: "panelhero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
