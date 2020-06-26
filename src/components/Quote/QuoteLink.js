import React, { useState } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import tw from "twin.macro"
import { CheckIcon } from '../Global/Icons';

const QuoteLinkWrapper = styled.div`
  ${tw`flex items-center justify-between bg-black bg-opacity-50 text-white font-sans text-sm whitespace-no-wrap pl-4 py-2 pr-2 rounded-full overflow-x-scroll`}
  ::-webkit-scrollbar { 
    display: none; 
  }
`
const LinkText = styled.span`
  ${tw`whitespace-no-wrap overflow-x-scroll`}
  ::-webkit-scrollbar { 
    display: none; 
  }
`
const CopyButton = styled.button`
  ${tw`px-4 py-1 ml-3 bg-primary text-white text-sm tracking-wide font-semibold uppercase cursor-pointer rounded-full focus:outline-none focus:shadow-outline`}
`
const StyledCheckIcon = styled(CheckIcon)`
  ${tw`h-5 w-5`}
`

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