import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { navigate, graphql, Link } from 'gatsby'

import Layout from '../components/Global/Layout'
import Pagination from '../components/Global/Pagination'

const QuotesWrapper = ({ children }) => <div className="row-start-2 row-end-5 col-start-1 col-end-9 p-4 md:p-6 my-8 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-7">{children}</div>
const H1 = ({ children }) => <h1 className="font-sans md:text-center text-4xl font-bold tracking-tight mb-1">{children}</h1>
const Subheading = ({ children }) => <p className="font-serif md:text-center text-xl mb-4 text-gray-500">{children}</p>
const StyledLink = ({ children, ...props }) => <Link {...props} className="block text-lg text-primary truncate underline hover:no-underline">{children}</Link>
const QuotesList = ({ children }) => <ul className="my-6 text-left">{children}</ul>
const QuotesListItem = ({ children }) => <li className="font-serif text-gray-700 leading-8 py-3">{children}</li>

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