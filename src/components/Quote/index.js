import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BackgroundImage from 'gatsby-background-image'

import QuoteLink from './QuoteLink'

const Blockquote = ({ children }) => <div className="text-white font-serif font-medium text-3xl lg:text-5xl leading-10 lg:leading-tight text-shadow">{children}</div>
const BlockquoteFooter = ({ children }) => <footer className="text-white italic mt-6 text-base lg:text-xl">{children}</footer>
const QuoteWrapper = ({ children }) => <div className="relative z-10 flex items-center justify-center mt-6 row-start-2 row-end-4 col-start-2 col-end-8">{children}</div>
const LinkWrapper = ({ children }) => <div className="relative z-10 row-start-4 row-end-5 col-start-2 col-end-8 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-6">{children}</div>

const StyledBackgroundImage = ({ image }) => (
  <BackgroundImage
    Tag="div"
    className="relative row-start-1 row-end-6 col-start-1 col-end-9 bg-cover bg-center"
    fluid={image}
    backgroundColor={`#040e18`}
  />
)

const QuotePage = ({ quote }) => {
  const imageNo = Math.floor(Math.random() * quote.quotee.images.length)
  return (
    <>
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
      <StyledBackgroundImage image={quote.quotee.images[imageNo].fluid} />
      <QuoteWrapper>
        <Blockquote>
          {quote.title}
          <BlockquoteFooter>
            {`– ${quote.quotee.title}`}
          </BlockquoteFooter>
        </Blockquote>
      </QuoteWrapper>
      <LinkWrapper>
        <QuoteLink link={`${process.env.GATSBY_ROOT_URL}/quotes/${quote.slug}`} />
      </LinkWrapper>
    </>
  )
}

QuotePage.propTypes = {
  quote: PropTypes.object.isRequired
}

export default QuotePage