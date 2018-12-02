import React from 'react'
import Layout from '../components/layout'
import styles from './404.module.css'

const NotFoundPage = () => (
  <Layout>
    <div className={styles.wrap}>
      <h1>Puslapis Nerastas</h1>
      <p>Grįžkite į pagrindinį puslapį</p>
    </div>
  </Layout>
)

export default NotFoundPage
