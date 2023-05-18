import React from 'react'
import { useNavigate } from 'react-router-dom'
import './comp.css'
import MobileDropdown from './MobileDropdown'

const StickyNavBar = () => {
    const navigate = useNavigate()
  return (
    <nav style={style} >
        <h1 className='myName' onClick={()=>navigate("/")} >iamDerek</h1>
        <MobileDropdown />
    </nav>
  )
}

const style = {
    width: "100%",
    height: '3em',
    lineHeight: '3em',
    // backgroundColor: "#F7F7F7",
    backgroundColor: "#1d1d1d",
    zIndex: "1000",
    position: 'sticky',
    top: '0',
    display: 'flex',
    justifyContent: 'space-between'
}

export default StickyNavBar
