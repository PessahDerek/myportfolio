import React from 'react'
import HireMeButton from '../components/HireMeButton'
import HireMeForm from '../components/HireMeForm'
import './pages.css'

const HireMe = () => {
  return (
    <div className='page' id='workWithMePage' data-aos="zoom-in">
        <div className='container'>
            <h1 className='titleh1'>Reach Me</h1>
            <div className='items'>
                <div>
                    <HireMeForm />
                </div>
                
                <div className='hireMeBtns'>
                    <h1 className='titleh1' style={{width: "90%", margin: "auto",textAlign: 'left'}}>Hire Me on 3rd party platforms...</h1>
                    <HireMeButton upwork />
                    <HireMeButton />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HireMe