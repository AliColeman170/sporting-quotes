import React from 'react'
import { graphql } from 'gatsby'

import QuotePage from '../components/Quote'
import Layout from '../components/Layout'

const IndexPage = ({data}) => {
  const quote = data.allContentfulQuote.edges[0].node
  return (
    <Layout>
      <QuotePage quote={quote} />
    </Layout>
  )
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
              fluid(maxWidth: 2000, quality: 95){
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }`

export default IndexPage
