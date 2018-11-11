import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styles from './main.module.css';
import BenefitCard from '../components/BenefitCard';
import AnimalCard from '../components/AnimalCard';
import ReadMoreBtn from '../components/ReadMoreBtn';
import FloatingBtn from '../components/FloatingBtn';

import immunity_card from '../images/benefits/020-heart.svg';
import smell_card from '../images/benefits/002-dog-smelling-dog.svg';
import wound_card from '../images/benefits/011-patch-1.svg';
import digestion_card from '../images/benefits/015-bone.svg';
import fur_card from '../images/benefits/012-pet.svg';

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
        <BenefitCard title="1. Sustiprina imunitetą" img={immunity_card} />
        <BenefitCard title="2. Pagerina virškinimą" img={digestion_card} />
        <BenefitCard
          title="3. Pagerėja išorinė išvaizda (kailis)"
          img={fur_card}
        />
        <BenefitCard title="4. Greičiau gyjančios žaizdos" img={wound_card} />
        <BenefitCard title="5. Pašalinami kvapai" img={smell_card} />
      </div>
      <h1 className={styles.animalGroupTitle}>Preparatas Pritaikytas:</h1>
      <div className={styles.animalGroupSection}>
        <AnimalCard
          title="Katės"
          img={props.data.imageCat.childImageSharp.fluid}
        />
        <AnimalCard
          title="Šunys"
          img={props.data.imageDog.childImageSharp.fluid}
        />
        <AnimalCard
          title="Triušiai"
          img={props.data.imageRabbit.childImageSharp.fluid}
        />
        <AnimalCard
          title="Papūgos"
          img={props.data.imageParrot.childImageSharp.fluid}
        />
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
    imageCat: file(relativePath: { eq: "cat-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageDog: file(relativePath: { eq: "dog-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageParrot: file(relativePath: { eq: "parrot-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageRabbit: file(relativePath: { eq: "rabbit-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
