import React from 'react'
import '../styles/Comp.css'

const BarBtn = ({clicked, setClicked}) => {

  return (
    <button className='bar-btn' onClick={()=>setClicked(!clicked)}>
        <div id="bar" />
        <div id="bar" style={{width: clicked ? "20px" : "50px"}} />
        <div id="bar" style={{width: clicked ? "30px" : "50px"}} />
    </button>
  )
}

export default BarBtn