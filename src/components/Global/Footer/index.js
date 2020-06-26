import React from 'react'

import { GithubIcon } from '../Icons'

const FooterWrapper = ({ children }) => <footer className="row-start-4 row-start-5 col-start-1 col-end-9 z-10 flex items-center justify-center">{children}</footer>
const GitLink = ({ dark, children, ...props}) => <a {...props} className={`${dark ? 'text-gray-700' : 'text-white'}`}><GithubIcon className="h-6 w-6" /></a>

const Footer = ({ dark }) => (
  <FooterWrapper>
    <GitLink dark={dark} href="https://github.com/AliColeman170/sporting-quotes" title="Sporting Quotes on Github" />
  </FooterWrapper>
)

export default Footer
