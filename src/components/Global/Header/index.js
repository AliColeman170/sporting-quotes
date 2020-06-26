import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import { HomeIcon } from '../Icons'

import SQLogo from '../../../assets/images/sporting-quotes-horizontal.svg'
import SQLogoAlt from '../../../assets/images/sporting-quotes-horizontal-white-alt.svg'

const Topbar = styled.header`
  ${tw`row-start-1 row-end-2 col-start-1 col-end-9 z-10 flex items-center justify-between px-4 md:px-6 py-4`}
  ${({ dark }) => dark ? tw`border-b border-gray-100` : ''}
`
const H1 = styled.h1``
const Logo = styled.img`
  ${tw`h-8`}
`
const StyledLink = styled(Link)`
  ${tw`text-white font-semibold`}
`
const StyledHomeIcon = styled(HomeIcon)`
  ${tw`h-5 w-5`}
`

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
