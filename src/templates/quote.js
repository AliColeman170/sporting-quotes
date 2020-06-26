import React from 'react'
import { graphql } from 'gatsby'

import QuotePage from '../components/Quote'
import Layout from '../components/Layout'

const Quote = ({ data }) => {
  const quote = data.contentfulQuote
  return (
    <Layout>
      <QuotePage quote={quote} />
    </Layout>
  )
}

export const query = graphql`
  query($pageId: String!) {
    contentfulQuote(id: { eq: $pageId }) {
      title
      slug
      quotee {
        title
        slug
        images {
          file {
            url
          }
          fluid(maxWidth: 2000, quality: 95){
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default Quote