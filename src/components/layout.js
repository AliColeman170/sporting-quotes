import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import tw from 'twin.macro'

import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'

const Grid = styled.div`
  ${tw`grid grid-cols-8 min-h-screen`}
  grid-template-rows: 80px 300px 1fr 48px 48px;
`

const Layout = ({ children, dark = false }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          { name: 'description', content: site.siteMetadata.description },
          { name: 'keywords', content: site.siteMetadata.keywords },
          { name: 'og:title', content: site.siteMetadata.title },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'og:site_name', content: 'Sporting Quotes' },
          { name: 'fb:app_id', content: '1899309746988748' },
          { name: 'twitter:site', content: '@sporting_quote' },
          { name: 'google-site-verification', content: 'RPPHnJOnAK8ve8bjQ2ECbCHVUY2QpCIw6xzGYmw6Zrs' }
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Grid>
        <Header siteTitle={site.siteMetadata.title} dark={dark} />
        {children}
        <Footer dark={dark} />
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  alt: PropTypes.bool
}

export default Layout
