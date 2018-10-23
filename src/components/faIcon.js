import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/pro-solid-svg-icons'

library.add(faCheck)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faHome)

const FAIcon = ({icon}) => (
  <FontAwesomeIcon icon={icon} />
)

FAIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default FAIcon