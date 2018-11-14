import React from 'react';
import Layout from '../components/layout';
import styles from './contact.module.css';
console.log(styles);

const ContactPage = () => (
  <Layout>
    <div className={styles.contactWrap}>
      <h2>
        Jei turite klausimų ar norite užsisakyti produkcijos užpildykite anketą
        ir mes su jumis susisieksime!
      </h2>
      <div className={styles.formWrap}>
        {' '}
        <form id="order-form" action="#" method="post">
          <div>
            <label htmlFor="name">Vardas:</label>
            <input
              type="text"
              name="name"
              id="name"
              tabIndex="1"
              maxLength="100"
            />
          </div>
          <div>
            <label htmlFor="email">El. paštas</label>
            <input
              type="email"
              name="email"
              id="email"
              tabIndex="2"
              required
              maxLength="100"
            />
          </div>
          <div>
            <label htmlFor="desc">Žinutė</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              tabIndex="3"
              required
              minLength="3"
              maxLength="1000"
            />
          </div>
          <div>
            <input
              className={styles.submitBtn}
              type="submit"
              value="Siūsti"
              tabIndex="4"
            />
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
