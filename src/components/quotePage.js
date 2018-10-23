import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import Layout from './layout'
import QuoteLink from './quoteLink'

const BackgroundImage = styled('div')`
  grid-row-start: 1;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 9;
  background-image: ${({url}) => 'url('+url+')'};
  background-size: cover;
  background-position: center center;
  position: relative;
  :before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
  }
`

const Blockquote = styled('blockquote')`
  color: #fff;
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.4;
  text-shadow: 2px 3px 3px rgba(0,0,0,0.5),
          0px -5px 35px rgba(255,255,255,0.3);
  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
  footer {
    color: #fff;
    font-size: 1.2rem;
    font-style: italic;
    margin-top: 1.5rem;
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`

const QuoteWrapper = styled('div')`
  position: relative;
  z-index: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`

const LinkWrapper = styled('div')`
  position: relative;
  z-index: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 2;
  grid-column-end: 8;
  @media (min-width: 768px) {
    grid-column-start: 3;
    grid-column-end: 7;
  }
  @media (min-width: 1024px) {
    grid-column-start: 4;
    grid-column-end: 6;
  }
`

const QuotePage = ({quote}) => {
  const imageNo = Math.floor(Math.random() * quote.quotee.images.length)
  return (
    <Layout alt={true}>
      <Helmet
        title={`Sporting Quotes - ${quote.quotee.title} – ${quote.title.substring(0, (120-24-quote.quotee.title.length))}...`}
        meta={[
          { name: 'description', content: `Famous sporting quote from ${quote.quotee.title} – ${quote.title}.` },
          { name: 'og:title', content: `Sporting Quotes - ${quote.quotee.title} – ${quote.title.substring(0, (120-24-quote.quotee.title.length))}...` },
          { name: 'og:description', content: `Famous sporting quote from ${quote.quotee.title} – ${quote.title}.` },
          { name: 'og:image', content: quote.quotee.images[imageNo].file.url },
          { name: 'og:url', content: `${process.env.GATSBY_ROOT_URL}/quotes/${quote.slug}` },
          { name: 'twitter:image:alt', content: `${quote.quotee.title}` },
        ]}
      />
      <BackgroundImage url={quote.quotee.images[imageNo].file.url} />
      <QuoteWrapper>
        <Blockquote>
          {quote.title}
          <footer>
            {`– ${quote.quotee.title}`}
          </footer>
        </Blockquote>
      </QuoteWrapper>
      <LinkWrapper>
        <QuoteLink link={`${process.env.GATSBY_ROOT_URL}/quotes/${quote.slug}`} />
      </LinkWrapper>
    </Layout>
  )
}

QuotePage.propTypes = {
  quote: PropTypes.object.isRequired
}

export default QuotePage