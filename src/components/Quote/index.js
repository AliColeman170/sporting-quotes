import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import tw from 'twin.macro'
import BackgroundImage from 'gatsby-background-image'

import QuoteLink from './QuoteLink'

const Blockquote = styled.blockquote`
  ${tw`text-white font-serif font-medium text-3xl lg:text-5xl leading-10 lg:leading-tight`}
  text-shadow: 2px 3px 3px rgba(0,0,0,0.5), 0px -5px 35px rgba(255,255,255,0.3);
`
const BlockquoteFooter = styled.footer`
  ${tw`text-white italic mt-6 text-base lg:text-xl`}
`

const QuoteWrapper = styled.div`
  ${tw`relative z-10 flex items-center justify-center mt-6 row-start-2 row-end-4 col-start-2 col-end-8`}
`

const LinkWrapper = styled.div`
  ${tw`relative z-10 row-start-4 row-end-5 col-start-2 col-end-8 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-6`}
`

const BackgroundImageDiv = ({ image, className }) => (
  <BackgroundImage
    Tag="div"
    className={className}
    fluid={image}
    backgroundColor={`#040e18`}
  />
)

const StyledBackgroundImage = styled(BackgroundImageDiv)`
  ${tw`relative row-start-1 row-end-6 col-start-1 col-end-9 bg-cover bg-center`}
`

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