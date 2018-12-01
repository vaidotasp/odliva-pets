import React from 'react'
import { Link } from 'gatsby'
import styles from './components.module.css'

const CookieModal = props => (
  <div className={styles.cookieModal}>
    <div className={styles.row}>
      <p>
        Siekdami pagerinti Jūsų naršymo kokybę, statistiniais ir rinkodaros
        tikslais šioje svetainėje naudojame slapukus, kuriuos galėsite bet kada
        atšaukti.
        <Link to="/terms">
          <p style={{ color: 'gold', textAlign: 'left' }}>Skaityti Plačiau</p>
        </Link>
      </p>
      <button className={styles.button} onClick={props.privacyToggle}>
        Sutinku
      </button>
    </div>
  </div>
)

export default CookieModal
