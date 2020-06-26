import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

const PaginationWrapper = ({ children }) => <div className="font-sans flex items-center justify-center mt-8">{children}</div>
const PageCount = ({ children }) => <span className="text-sm px-2">{children}</span>
const NumberInput = ({ ...props }) => <input {...props} className="form-input inline-block sm:text-sm sm:leading-5" />
const StyledLink = ({ children, ...props }) => <Link {...props} className="bg-primary text-white h-8 w-8 flex items-center justify-center rounded-full text-sm">{children}</Link>
const StyledLinkDisabled = ({ children }) => <span className="bg-primary opacity-50 cursor-not-allowed text-white h-8 w-8 flex items-center justify-center rounded-full text-sm">{children}</span>
const BackIcon = () => <ChevronLeftIcon className="h-6 w-6" />
const NextIcon = () => <ChevronRightIcon className="h-6 w-6" />

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