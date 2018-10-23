import React, { Component } from 'react'
import styled from 'react-emotion'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FAIcon from './faIcon'

const QuoteLinkWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.5);
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
  border-radius: 100px;
  white-space: nowrap;
  overflow-x: scroll;
  position: relative;
  ::-webkit-scrollbar { 
    display: none; 
  }
  > span {
    white-space: nowrap;
    overflow-x: scroll;
    position: relative;
    ::-webkit-scrollbar { 
      display: none; 
    }
  }
`

const CopyButton = styled('button')`
  background-color: #59ba47;
  padding: 0.1rem 1rem;
  border-radius: 100px;
  margin-left: 0.75rem;
  font-size: 0.9em;
  letter-spacing: 0.5px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  border: none;
`

class QuoteLink extends Component {

  state = {
    copied: false
  }

  render() {
    return (
      <QuoteLinkWrapper>
        <span>
          {this.props.link}
        </span>
        <CopyToClipboard text={this.props.link} onCopy={() => this.setState({copied: true})}>
          <CopyButton>
            {this.state.copied ? <FAIcon icon="check" /> : 'Copy'}
          </CopyButton>
        </CopyToClipboard>
      </QuoteLinkWrapper>
    )
  }

}

export default QuoteLink