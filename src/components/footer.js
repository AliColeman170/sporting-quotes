import React from 'react'
import styled, { css } from 'react-emotion'

import FAIcon from './faIcon'

const FooterWrapper = styled('footer')`
  grid-row-start: 5;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 9;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
`

const Footer = () => (
  <FooterWrapper>
    <a 
      href="https://github.com/AliColeman170/sporting-quotes" 
      title="Sporting Quotes on Github"
      className={css`color:#fff;`}><FAIcon icon="github" /></a>
  </FooterWrapper>
)

export default Footer
