import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import Link from 'gatsby-link';

import FAIcon from './faIcon'

const NavLink = ({test, url, text}) => {
  if (!test) {
    return (
      <Link 
        to={url} 
        className={css`
          background-color: #59ba47;
          color: #fff;
          height: 1.8rem;
          width: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          font-size: 0.9em;
        `}
      >
        {text}
      </Link>
    )
  } else {
    return (
      <span
        className={css`
          background-color: #59ba47;
          color: #fff;
          height: 1.8rem;
          width: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          opacity: 0.3;
          font-size: 0.9em;
          text-indent: 2px;
        `}
      >
        {text}
      </span>
    )
  }
};

const Pagination = ({
  next,
  previous,
  current,
  pageCount,
  handleChange
}) => {
  const first = current === 1;
  const last = current === pageCount;
  return (
    <div className={css`
      font-family: 'Open Sans', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
    `}>
      <NavLink test={first} url={previous} text={<FAIcon icon="chevron-left" />} />
      <span className={css`
        padding: 0 0.75rem;
        font-size: 0.9rem;
      `}>
        <input 
          type="number" 
          min={1} 
          max={pageCount} 
          value={parseInt(current)} 
          onChange={handleChange}
          className={css`
            font-family: 'Open Sans', sans-serif;
            border-radius: 3px;
            border: 1px solid #e5e5e5;
            text-align: center;
          `}
          />
        {` of ${pageCount}`
      }</span>
      <NavLink test={last} url={next} text={<FAIcon icon="chevron-right" />} />
    </div>
  )
}

Pagination.propTypes = {
  next: PropTypes.string.isRequired,
  previous: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Pagination