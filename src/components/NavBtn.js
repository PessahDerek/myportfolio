import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBtn = ({text, path, action}) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    let color =  path.length < 2 ? 
                pathname === "/" ? "#8E57FF" : "black" :
                pathname.includes(path) ? "#8E57FF" : "black" 

    const container = {
        transition: "width 0.5s linear",
        borderBottom: `1px solid ${pathname.includes(path) ? "#8E57FF" : "transparent"}` ,
        width: path.length < 2 ? 
            pathname === "/" ? "10rem" : "0px" :
            pathname.includes(path) ? "10rem" : "0px" 
    }
    const moveTo = () => {
        if(action){ // only download button

            return
        }
        navigate(`/${path}`)
    } 

  return (
    <div style={container} >
        <button style={{...btnStyle, color: color}} onClick={moveTo}>{text}</button>
    </div>
  )
}

const btnStyle = {
    width: "10rem",
    height: "2rem",
    backgroundColor: 'transparent'
}

export default NavBtn