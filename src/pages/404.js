import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundWrapper = styled.div`
  ${tw`col-start-1 col-end-9 row-start-2 row-end-5 flex flex-col items-center justify-center`}
`
const H1 = styled.h1`
  ${tw`text-4xl font-semibold`}
`
const P = styled.p`
  ${tw`text-gray-700 mt-4`}
`
const StyledLink = styled(Link)`
  ${tw`text-primary mt-4`}
`

const NotFoundPage = () => (
  <Layout dark>
    <NotFoundWrapper>
      <H1>Page Not Found</H1>
      <P>You just hit a page that doesn&#39;t exist...the sadness.</P>
      <StyledLink to="/">Return Home</StyledLink>
    </NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
