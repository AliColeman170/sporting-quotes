import React from 'react'
import { graphql } from 'gatsby'

import QuotePage from '../components/Quote'
import Layout from '../components/Layout'

const Quote = ({data}) => {
  const quote = data.contentfulQuote
  return (
    <Layout>
      <QuotePage quote={quote} />
    </Layout>
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