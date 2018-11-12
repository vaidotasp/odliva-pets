import React from 'react';
import Layout from '../components/layout';
import styles from './info.module.css';
import FloatingBtn from '../components/FloatingBtn';
import OrderBtn from '../components/OrderBtn';
const InfoPage = () => (
  <Layout>
    <div className={styles.generalWrap}>
      <h1 style={{ textAlign: 'center' }}>
        Produkcijos informacija ir naudojimas
      </h1>
      <div className={styles.generalInfo}>
        <div className={styles.generalDescription}>
          <ul>
            <li>
              <h4>Aprašymas</h4>
              <p>
                Doktor Animals - tai naudingų bakterijų kultūrų ir augalinių
                ekstraktų mišinys.
              </p>
            </li>
            <li>
              <h4>Sudėtis</h4>
              <p>
                Švarus nechloruotas vanduo, cukranendrių melasa, pieno rūgšties
                bakterijos, mielės, natūrali acto rūgštis, etanolis, augalų
                ekstraktai.
              </p>
            </li>
            <li>
              <h4>Kultūros</h4>
              <p>
                Lactobacillus casei (ATTC PTA 6135), Enterococcus faecium (NCIMB
                10415, DSM 10663), Bacillus subtilis (C-3102, DSM 15544).
              </p>
            </li>
            <li>
              <h4>Ekologija ir GMO</h4>
              <p>
                Produktas yra nekenksmingas aplinkai ir nėra genetiškai
                modifikuotas. 100% ekologinis produktas.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.imgPlaceholder}>Product Pic</div>
      </div>
      <div className={styles.animalDescWrap}>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            rerum quo fugit quaerat et, nisi ipsum deserunt tempora alias, minus
            doloribus? Eligendi, commodi eos? Eum itaque quos distinctio
            delectus modi.
          </div>
          <div className={styles.imgPlaceholder}>pic</div>
        </div>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            rerum quo fugit quaerat et, nisi ipsum deserunt tempora alias, minus
            doloribus? Eligendi, commodi eos? Eum itaque quos distinctio
            delectus modi.
          </div>
          <div className={styles.imgPlaceholder}>pic</div>
        </div>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            rerum quo fugit quaerat et, nisi ipsum deserunt tempora alias, minus
            doloribus? Eligendi, commodi eos? Eum itaque quos distinctio
            delectus modi.
          </div>
          <div className={styles.imgPlaceholder}>pic</div>
        </div>
        <div className={styles.animalDesc}>
          <div className={styles.animalDetail}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            rerum quo fugit quaerat et, nisi ipsum deserunt tempora alias, minus
            doloribus? Eligendi, commodi eos? Eum itaque quos distinctio
            delectus modi.
          </div>
          <div className={styles.imgPlaceholder}>pic</div>
        </div>
      </div>
      <OrderBtn />
    </div>
    <FloatingBtn />
  </Layout>
);

export default InfoPage;
