import React from 'react'
import { graphql } from 'gatsby'

import QuotePage from '../components/quotePage'

const IndexPage = ({data}) => {
  const quote = data.allContentfulQuote.edges[0].node
  return <QuotePage quote={quote} />
}

export const query = graphql`
  query($randomNum: Int!) {
    allContentfulQuote(skip: $randomNum, limit: 1) {
      edges {
        node {
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
    }
  }`

export default IndexPage
