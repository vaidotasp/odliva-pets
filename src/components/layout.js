import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`Odliva Probiotikai Naminiams Gyvūnams`}
          meta={[
            {
              name: 'description',
              content:
                'Natūralus probiotikas skirtas sustiprinti naminių gyvūnų sveikatą ir imunitetą.',
            },
            {
              name: 'keywords',
              content:
                'probiotikai, organiškas, naminiai gyvūnai, katės, šunys, papūgos, kiškiai, papildai, sveikata, kailis, žaizdos',
            },
          ]}
        >
          <html lang="lt" />
        </Helmet>
        <Header />
        <div>{children}</div>
        <Footer />
        <CookieModal />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const CookieModal = () => (
  <div>
    <p>
      Siekdami pagerinti Jūsų naršymo kokybę, statistiniais ir rinkodaros
      tikslais šioje svetainėje naudojame slapukus, kuriuos galėsite bet kada
      atšaukti. <button>Plačiau</button>
    </p>
    <button>Accept (dismiss)</button>
  </div>
)
