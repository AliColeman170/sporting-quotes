import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/pro-solid-svg-icons'

library.add(faCheck)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faHome)
library.add(faGithub)

const FAIcon = ({icon}) => {
  let style = 'fas'
  if (icon === 'github') {
    style = 'fab'
  }
  return <FontAwesomeIcon icon={[style, icon]} />
}

FAIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default FAIcon