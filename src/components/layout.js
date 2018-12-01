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
    console.log(`toggle privacy pref thing`)
    //write into the local storage

    //update the state
    this.setState({ privacyPrefShow: false })
  }

  componentDidMount() {
    console.log(`checking for dismiss preferance...`)
    //use localstorage to check ?
    const privacyPrefShow = true
    this.setState({ privacyPrefShow })
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
            <div>{this.props.children}</div>
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
