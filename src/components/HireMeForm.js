import React from 'react'
import BlackButton1 from './BlackButton1'
import './comp.css'

const HireMeForm = () => {
  return (
    <form>
        <input type='text' placeholder='Name/Company' />
        <input type="email" placeholder='Email' />
        <textarea placeholder='Leave message/short project description' />
        <BlackButton1 text={"Send Message"} />
    </form>
  )
}

export default HireMeForm