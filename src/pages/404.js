import React from 'react'
import Layout from '../components/Global/Layout'
import { Link } from 'gatsby'

const NotFoundWrapper = ({children}) => <div className="col-start-1 col-end-9 row-start-2 row-end-5 flex flex-col items-center justify-center">{children}</div>
const H1 = ({children}) => <h1 className="text-4xl font-semibold">{children}</h1>
const P = ({children}) => <p className="text-gray-700 mt-4">{children}</p>
const StyledLink = ({ children, ...props }) => <Link {...props} className="text-primary mt-4">{children}</Link>

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
