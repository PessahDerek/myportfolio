import React, { useState } from 'react'
import BlueBtn from './BlueBtn';
import '../styles/Comp.css'

const WorkWithMeForm = () => {
    const [resp, setResp] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

    }

  return (
    <form action="https://send.pageclip.co/gDXFsvRMDiL17yWPCDMPL24loXV6lqVm/portfolio-form" className="work-with-me-form" method="post">
        <h2>Send Me a Message, proposal or a project brief</h2> 
        <input name='Client' required type='text' placeholder='Your Name/Company' />
        <select required name='Response Channel' value={resp} onChange={e => setResp(e.target.value)} >
            <option defaultValue={""} >Select Response Channel</option>
            <option value='whatsapp' >Whatsapp</option>
            <option value='tel'>Phone Call</option>
            <option value='email'>Email</option>
            <option value='twitter' >Twitter DM</option>
        </select>
        <input name='contact' required type={resp} readOnly={resp === ""} placeholder={resp + " address"} />
        <textarea required name="Message" placeholder="Write your message and I'll respond as soon as possible." />
        <BlueBtn text="Submit Message" type={'submit'} />
    </form>
  )
}

export default WorkWithMeForm