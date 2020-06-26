import React from 'react'
import { Link } from 'gatsby'

import { HomeIcon } from '../Icons'

import SQLogo from '../../../assets/images/sporting-quotes-horizontal.svg'
import SQLogoAlt from '../../../assets/images/sporting-quotes-horizontal-white-alt.svg'

const Topbar = ({ dark, children }) => <header className={`${dark ? 'border-b border-gray-100' : ''} row-start-1 row-end-2 col-start-1 col-end-9 z-20 flex items-center justify-between px-4 md:px-6 py-4`}>{children}</header>
const H1 = ({ children }) => <h1>{children}</h1>
const Logo = ({ ...props }) => <img {...props} alt="Sporting Quotes" className="h-8" />
const StyledLink = ({ children, ...props}) => <Link {...props} className="text-white font-semibold">{children}</Link>
const StyledHomeIcon = () => <HomeIcon className="h-5 w-5" />

const Header = ({ siteTitle, dark }) => (
  <Topbar dark={dark}>
    <H1>
      <Link to="/">
        <Logo src={dark ? SQLogo : SQLogoAlt} alt={siteTitle} />
      </Link>
    </H1>
    {dark ? <Link to="/"><StyledHomeIcon /></Link> : <StyledLink to="/quotes">Browse All</StyledLink>}
  </Topbar>
)

export default Header
