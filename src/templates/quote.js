import React from 'react'
import { graphql } from 'gatsby'

import QuotePage from '../components/quotePage'

const Quote = ({data}) => {
  const quote = data.contentfulQuote
  return (
    <QuotePage quote={quote} />
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulQuote(id: { eq: $id }) {
      title
      slug
      quotee {
        title
        slug
        images {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
`

export default Quote