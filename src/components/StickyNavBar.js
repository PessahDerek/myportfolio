import React from 'react'
import './comp.css'

const StickyNavBar = () => {
  return (
    <nav style={style} >
        <h1 className='myName'>iamDerek</h1>
    </nav>
  )
}

const style = {
    width: "100%",
    height: '3em',
    lineHeight: '3em',
    backgroundColor: "#F7F7F7",
    zIndex: "1000",
    position: 'sticky',
    top: '0',
    display: 'flex'
}

export default StickyNavBar