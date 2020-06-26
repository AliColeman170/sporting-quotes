import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CheckIcon } from '../Global/Icons';

const QuoteLinkWrapper = ({ children }) => <div className="flex items-center justify-between bg-black bg-opacity-50 text-white font-sans text-sm whitespace-no-wrap pl-4 py-2 pr-2 rounded-full overflow-x-scroll no-scrollbar">{children}</div>
const LinkText = ({ children }) => <span className="whitespace-no-wrap overflow-x-scroll no-scrollbar">{children}</span>
const CopyButton = ({ children, ...props }) => <button {...props} className="px-4 py-1 ml-3 bg-primary text-white text-sm tracking-wide font-semibold uppercase cursor-pointer rounded-full focus:outline-none focus:shadow-outline">{children}</button>
const StyledCheckIcon = () => <CheckIcon className="h-5 w-5" />

const QuoteLink = ({ link }) => {
  const [copied, setCopied] = useState(false)
  return (
    <QuoteLinkWrapper>
      <LinkText>
        {link}
      </LinkText>
      <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
        <CopyButton>
          {copied ? <StyledCheckIcon /> : 'Copy'}
        </CopyButton>
      </CopyToClipboard>
    </QuoteLinkWrapper>
  )
}

export default QuoteLink