import React from 'react'

const BlueBtn = ({text, action, type}) => {
  return (
        <button type={type || 'button'} className='blue-btn' onClick={action}>
            {text}
        </button>
  )
}

export default BlueBtn