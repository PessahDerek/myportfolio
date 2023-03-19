import React from 'react'
import './comp.css'

const BlackButton1 = ({text, action}) => {
  return (
    <button className='blackButton1' onClick={action}>
        {text}
    </button>
  )
}

export default BlackButton1