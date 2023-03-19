import React from 'react'
import useIsPc from '../hooks/useIsPc'
import NavBtn from './NavBtn'

const NavBar = () => {
    const isPc = useIsPc()

    if(isPc) return (
    <nav className='pcNavBar' style={navStyle}>
        <NavBtn text={"home page"} path={""} />
        <NavBtn text={"my portfolio"} path={"portfolio"} />
        <NavBtn text={"get in touch"} path={"workwithme"} />
        <NavBtn text={"download cv"} path={"download"} action />
    </nav>
  )
}
const navStyle = {
    position: "fixed",
    height: "50vh",
    top: '25vh',
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-around",
    zIndex: "1000"
}

export default NavBar