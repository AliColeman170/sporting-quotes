import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "react-emotion"
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'
import './layout.css'

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 72px 300px 1fr 48px 44px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  min-height: 100vh;
`

const Layout = ({ children, alt }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'og:title', content: data.site.siteMetadata.title },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'og:site_name', content: 'Sporting Quotes' },
            { name: 'fb:app_id', content: '1899309746988748' },
            { name: 'twitter:site', content: '@sporting_quote' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Grid>
          <Header siteTitle={data.site.siteMetadata.title} alt={alt || false} />
          {children}
          <Footer alt={alt || false} />
        </Grid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  alt: PropTypes.bool
}

export default Layout
