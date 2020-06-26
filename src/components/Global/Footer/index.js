import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { GithubIcon } from '../Icons'

const FooterWrapper = styled('footer')`
  ${tw`row-start-4 row-start-5 col-start-1 col-end-9 z-10 flex items-center justify-center`}
`
const GitLink = styled('a')`
  ${({ dark }) => dark ? tw`text-gray-700` : tw`text-white` }
`
const StyledGithubIcon = styled(GithubIcon)`
  ${tw`h-6 w-6`}
`

const Footer = ({ dark }) => (
  <FooterWrapper>
    <GitLink dark={dark} href="https://github.com/AliColeman170/sporting-quotes" title="Sporting Quotes on Github">
      <StyledGithubIcon />
    </GitLink>
  </FooterWrapper>
)

export default Footer
