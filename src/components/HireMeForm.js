import React from 'react'
import BlackButton1 from './BlackButton1'
import './comp.css'

const HireMeForm = () => {
  // const secret = "api_QgftSPwNRXXYf6yjfTJOJfDL9vPdDkZ6"
  // const pageClip = new Pageclip()
  
  return (
    <form action="https://send.pageclip.co/gDXFsvRMDiL17yWPCDMPL24loXV6lqVm/portfolio-form" class="pageclip-form" method="post">
        <input required name='name' type='text' placeholder='Name/Company' />
        <input required name='email' type="email" placeholder='Email' />
        <textarea name='message' placeholder='Leave message/short project description' />
        <BlackButton1 text={"Send Message"} />
    </form>
  )
}

export default HireMeForm