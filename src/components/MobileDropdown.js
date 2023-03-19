import React, { useState } from 'react'
import useIsPc from '../hooks/useIsPc'
import './comp.css'
import MobileNavBtn from './MobileNavBtn'

const MobileDropdown = () => {
    const isPc = useIsPc()
    const [clicked, setClicked] = useState(false)
    
    const clickBtn = () => {
        setClicked(!clicked)
    }
    const hide = () => {
        setClicked(false)
    }
    if(!isPc)return (
    <div className='mobileDropDown'>
        <span onClick={clickBtn} onBlur={hide}>
            <button className='mobileDropDownBtn' onClick={clickBtn}>
                {clicked ? "Close" : "Menu"}
            </button>
            <div className='bars'>
                <div style={{transform: `rotate(${clicked ? "45" : "0"}deg)`}} />
                <div style={{transform: `rotate(${clicked ? "-45" : "0"}deg)`}} />
                <div style={{transform: `rotate(${clicked ? "45" : "0"}deg)`}} />
            </div>
        </span>
        {clicked && <div className='btns'>
            <MobileNavBtn show={setClicked} text={"home page"} path="/" />
            <MobileNavBtn show={setClicked} text="my portfolio" path="/portfolio" />
            <MobileNavBtn show={setClicked} text="get in touch" path="/workwithme" />
            <MobileNavBtn show={setClicked} text="download cv" />
        </div>}
    </div>
  )
}

export default MobileDropdown