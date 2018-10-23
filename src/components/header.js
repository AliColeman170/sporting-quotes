import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

import FAIcon from './faIcon'
import SQLogo from '../images/sporting-quotes-horizontal.svg'
import SQLogoAlt from '../images/sporting-quotes-horizontal-white-alt.svg'

const Topbar = styled('header')`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 9;
  z-index: 10;
  border-bottom: ${({alt}) => (alt === 'true') ? 'none' : '1px solid #f4f4f4'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
`

const Header = ({ siteTitle, alt }) => (
  <Topbar alt={alt.toString()}>
    <h1 className={css`
      margin-bottom: 0;
    `}>
      <Link
        to="/"
      >
        <img
          src={alt ? SQLogoAlt : SQLogo}
          alt={siteTitle}
          className={css`
            display: block;
            height: calc(72px - 2rem);
            margin: 0;
          `} />
      </Link>
    </h1>
    {alt ? <Link to="/quotes" className={css`color: #fff;text-decoration: none;`}>Browse All</Link> : <Link to="/" className={css`color: #32353c;text-decoration: none;font-size:1.2rem;`}><FAIcon icon="home" /></Link>}
  </Topbar>
)

export default Header
