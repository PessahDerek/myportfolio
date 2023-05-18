import React from 'react'
import './comp.css'

const BorderButton1 = ({text, action}) => {
  return (
    <button onClick={action} className='borderButton1'>
        {text}
    </button>
  )
}

export default BorderButton1