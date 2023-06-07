import React from 'react'

const Title = ({title}) => {
  return (
    <div className='title'>
        <div className='line' />
        <h2>{title}</h2>
        <div className='line' />
    </div>
  )
}

export default Title