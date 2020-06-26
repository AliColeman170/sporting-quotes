import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import tw from 'twin.macro'

const PaginationWrapper = styled.div`
  ${tw`font-sans flex items-center justify-center mt-8`}
`
const PageCount = styled.span`
  ${tw`text-sm px-2`}
`
const NumberInput = styled.input`
  ${tw`form-input inline-block sm:text-sm sm:leading-5`}
`
const StyledLink = styled(Link)`
  ${tw`bg-primary text-white h-8 w-8 flex items-center justify-center rounded-full text-sm`}
`
const StyledLinkDisabled = styled.span`
  ${tw`bg-primary opacity-50 cursor-not-allowed text-white h-8 w-8 flex items-center justify-center rounded-full text-sm`}
`
const BackIcon = styled(ChevronLeftIcon)`
  ${tw`h-6 w-6`}
`
const NextIcon = styled(ChevronRightIcon)`
  ${tw`h-6 w-6`}
`

const NavLink = ({ children, url }) => {
  if (url) return <StyledLink to={url}>{children}</StyledLink>
  return <StyledLinkDisabled>{children}</StyledLinkDisabled>
};

const Pagination = ({ pageContext, handleChange }) => {
  const { humanPageNumber, numberOfPages, nextPagePath, previousPagePath } = pageContext
  return (
    <PaginationWrapper>
      <NavLink url={previousPagePath}><BackIcon /></NavLink>
      <PageCount>
        <NumberInput 
          type="number" 
          min={1} 
          max={numberOfPages} 
          value={parseInt(humanPageNumber)} 
          onChange={handleChange}
          />
        {` of ${numberOfPages}`}
      </PageCount>
      <NavLink url={nextPagePath}><NextIcon /></NavLink>
    </PaginationWrapper>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Pagination