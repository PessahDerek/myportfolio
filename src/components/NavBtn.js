import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useDownload from '../hooks/useDownload'
import './comp.css'

const NavBtn = ({text, path, action}) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const download = useDownload()

    let color =  path.length < 2 ? 
                pathname === "/" ? "white" : "#AE7CE7" :
                pathname.includes(path) ? "white" : "#AE7CE7" 

    const container = {
        transition: "width 0.5s linear",
        borderBottom: `1px solid ${pathname.includes(path) ? "#8E57FF" : "transparent"}` ,
        width: path.length < 2 ? 
            pathname === "/" ? "10rem" : "0px" :
            pathname.includes(path) ? "10rem" : "0px" 
    }
    const moveTo = () => {
        if(action){ // only download button
            download()
            return
        }
        navigate(`/${path}`)
    } 

  return (
    <div style={container} >
        <button className='navBtn' style={{...btnStyle, color: color}} onClick={moveTo}>{text}</button>
    </div>
  )
}

const btnStyle = {
    width: "10rem",
    height: "2rem",
    backgroundColor: 'transparent'
}

export default NavBtn