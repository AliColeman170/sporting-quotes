import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion'
import { navigate, graphql } from 'gatsby'

import Layout from '../components/layout'
import Pagination from '../components/pagination'

const ListWrapper = styled('div')`
  grid-row-start: 2;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 9;
  padding: 1rem;
  margin: 2rem 0;
  text-align: center;
  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 8;
  }
  @media (min-width: 1024px) {
    grid-column-start: 3;
    grid-column-end: 7;
  }
`

class Quotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: this.props.pageContext.index
    }
  }

  handleChange = (e) => {
    this.setState({page: e.target.value}, () => {
      if (this.state.page === '1') {
        navigate(`/quotes`)
      } else {
        navigate(`/quotes/${this.state.page}`)
      }
    })
  }

  render() {
    const { data, pageContext } = this.props;
    const { group, index, pageCount, additionalContext } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    return (
      <Layout>
        <Helmet
          title={`Page ${this.state.page} – Browse All - Sporting Quotes`}
          meta={[
            { name: 'description', content: `Browse all ${additionalContext.totalCount} sporting quotes – page ${this.state.page} of ${pageCount}.` },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'og:title', content: `Page ${this.state.page} – Browse All - Sporting Quotes` },
            { name: 'og:description', content: `Browse all ${additionalContext.totalCount} sporting quotes – page ${this.state.page} of ${pageCount}.` },
            { name: 'og:image', content: 'https://images.ctfassets.net/xyhqjsnzuimo/3A1GAnJAYEcqoQYcA6IM4Y/0da41eb484abf0a4895efbf8c3bac596/gettyimages-482857506.jpg' },
            { name: 'og:url', content: (this.state.page === '1') ? `${process.env.GATSBY_ROOT_URL}/quotes` : `${process.env.GATSBY_ROOT_URL}/quotes/${this.state.page}` },
            { name: 'twitter:image:alt', content: 'Sporting Quotes' },
          ]}
        />
        <ListWrapper>
          <h1 className={css`
            text-align: center;
            margin-bottom: 0.75rem;
          `}>Browse Quotes</h1>
          <p className={css`
            font-size: 1.2rem;
            color: #32353c;
          `}>{additionalContext.totalCount} Quotes</p>
          <div className={css`
            padding: 1rem 0;
          `}>
            {group.map(({ node }) => (
              <div
                key={node.id}
                className={css`
                  padding: 0.75rem 0;
                  line-height: 1.8em;
                  color: #32353c;
                  font-size: 0.95rem;
                  text-align: left;
                `}
              >
                <Link
                  to={`quotes/${node.slug}`}
                  className={css`
                    display: block;
                    font-family: 'Lora', serif;
                    color: #59ba47;
                    font-size: 1rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  `}
                  >
                    {node.title}
                </Link>
                – {node.quotee && node.quotee.title}
              </div>
            ))}
          </div>
          <Pagination
            next={`/quotes/${nextUrl}`}
            previous={`/quotes/${previousUrl}`}
            current={this.state.page}
            pageCount={pageCount}
            handleChange={this.handleChange}
          />
        </ListWrapper>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        keywords
      }
    }
  }
`

Quotes.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default Quotes