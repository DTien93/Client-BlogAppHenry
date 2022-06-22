import React from 'react'

import '../Chip/chip.scss'

const Chip = ({ label }) => {
  return (
      <p className='chip'>{label}</p>
  )
}

export default Chip