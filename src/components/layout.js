import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import CookieModal from './CookieModal'
import './layout.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.privacyPref = this.privacyPref.bind(this)
    this.state = {
      privacyPrefShow: true,
    }
  }

  privacyPref() {
    const currentPref = localStorage.getItem('OdlivaPrivacyPref')
    if (!currentPref) {
      //create new pref inside the local storage
      localStorage.setItem('OdlivaPrivacyPref', 'true')
      this.setState({ privacyPrefShow: false })
    }
    //update the state
    this.setState({ privacyPrefShow: false })
  }

  componentDidMount() {
    const currentPref = localStorage.getItem('OdlivaPrivacyPref')
    if (currentPref) {
      //if current pref exists, utilize it and hide the privacy modal
      this.setState({ privacyPrefShow: false })
    }
  }

  render() {
    return (
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
            {this.props.children}
            <Footer />
            {this.state.privacyPrefShow && (
              <CookieModal privacyToggle={this.privacyPref} />
            )}
          </>
        )}
      />
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
