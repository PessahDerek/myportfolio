import React from 'react'
import BlackButton1 from '../components/BlackButton1'
import './pages.css'

const Home = () => {
    let txt = "I develop robust," +
    "secure and scalable software solutions for"+
    "all cadre of clients, from businesses to "+
    "institutions, companies to individuals. \n"+
    "Do you have a project contact me, let's talk"
  return (
    <div className='page' id='homePage'>
        <div className='container'>
            <div className='titles'>
                <span>
                    <h1 className='majorh1'>Soft</h1>
                    <h1 className='majorh1'>ware</h1>
                </span>
                <h1>Developer</h1>
                <p>🏙 Nairobi(Remote)</p>
            </div>
            <div className='details'>
                <h1>Hello🙋🏽‍♂️, I am Derek Pesa,</h1>
                <p>{txt}</p>
                <BlackButton1 text="hire me" />
            </div>
        </div>
    </div>
  )
}

export default Home