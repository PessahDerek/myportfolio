import React, { useState } from 'react';
import '../styles/Comp.css';
import icon from '../images/icon.png'
import DropDownBtn from './DropDownBtn';
import BarBtn from './BarBtn';

const MainNavBar = () => {
    const [isPc, setIsPc] = useState(window.innerWidth > 600)
    const paths = [
        {txt: "home", path: ""}, 
        {txt: "projects", path: "#portfolio"},
        {txt: "about me", path: "aboutme"},
        {txt: "CV", path: 'resume'},
        {txt: "work with me", path: "#work-with-me"}
    ]
    const [clicked, setClicked] = useState(false)

    window.addEventListener('resize', ()=>{
        setIsPc(window.innerWidth > 600)
    })


  return (
    <nav className='main-nav-bar'>
        <div className='container'>
            <img src={icon} alt="logo" />
            {isPc ? <div className='pc-btns'>
                {paths.map(path => <DropDownBtn key={path.txt} path={path} />)}
            </div>
            : 
            <div className='mobi-btns' onBlur={()=>setClicked(false)}>
                <BarBtn clicked={clicked} setClicked={setClicked} />
                {clicked &&<div className='mobile-drop-down-cont'>
                    {paths.map(path => <DropDownBtn key={path.txt} path={path} />)}
                </div>}
            </div>}
        </div>
    </nav>
  )
}

export default MainNavBar