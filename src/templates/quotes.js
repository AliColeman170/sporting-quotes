import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { navigate, graphql, Link } from 'gatsby'
import tw from 'twin.macro'

import Layout from '../components/Global/Layout'
import Pagination from '../components/Global/Pagination'

const QuotesWrapper = styled.div`
  ${tw`row-start-2 row-end-5 col-start-1 col-end-9 p-4 md:p-6 my-8 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-7`}
`
const H1 = styled.h1`
  ${tw`font-sans md:text-center text-4xl font-semibold tracking-tight mb-1`}
`
const Subheading = styled.p`
  ${tw`font-serif md:text-center text-xl mb-4 text-gray-500`}
`
const StyledLink = styled(Link)`
  ${tw`block text-lg text-primary truncate underline hover:no-underline`}
`
const QuotesList = styled.ul`
  ${tw`my-6 text-left`}
`
const QuotesListItem = styled.li`
  ${tw`font-serif text-gray-700 leading-8 py-3`}
`

const Quotes = ({ path, pageContext, data }) => {
  const { humanPageNumber, numberOfPages, totalCount } = pageContext
  const { site, allContentfulQuote: { edges: quotes } } = data

  const [page, setPage] = useState(pageContext.humanPageNumber)

  const handleChange = (e) => {
    setPage(e.target.value)
  }

  useEffect(() => {
    if (page === 1) {
      navigate(`/quotes`)
    } else {
      navigate(`/quotes/${page}`)
    }
  }, [page])

  return (
    <Layout dark>
      <Helmet
        title={`Page ${humanPageNumber} – Browse All - Sporting Quotes`}
        meta={[
          { name: 'description', content: `Browse all ${totalCount} sporting quotes – page ${humanPageNumber} of ${numberOfPages}.` },
          { name: 'keywords', content: site.siteMetadata.keywords },
          { name: 'og:title', content: `Page ${humanPageNumber} – Browse All - Sporting Quotes` },
          { name: 'og:description', content: `Browse all ${totalCount} sporting quotes – page ${humanPageNumber} of ${numberOfPages}.` },
          { name: 'og:image', content: 'https://images.ctfassets.net/xyhqjsnzuimo/3A1GAnJAYEcqoQYcA6IM4Y/0da41eb484abf0a4895efbf8c3bac596/gettyimages-482857506.jpg' },
          { name: 'og:url', content: `${process.env.GATSBY_ROOT_URL}${path}`},
          { name: 'twitter:image:alt', content: 'Sporting Quotes' },
        ]}
      />
      <QuotesWrapper>
        <H1>Browse Quotes</H1>
        <Subheading>{totalCount} Quotes</Subheading>
        <QuotesList>
          {quotes.map(({ node }) => (
            <QuotesListItem key={node.id}>
              <StyledLink to={`/quotes/${node.slug}`}>
                  {node.title}
              </StyledLink>
              – {node.quotee && node.quotee.title}
            </QuotesListItem>
          ))}
        </QuotesList>
        <Pagination
          pageContext={pageContext}
          handleChange={handleChange}
        />
      </QuotesWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        keywords
      }
    }
    allContentfulQuote(sort: { fields: [title]}, skip: $skip, limit: $limit) {
      edges {
        node {
          id
          title
          slug
          quotee {
            title
          }
        }
      }
    }
  }
`

Quotes.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default Quotes