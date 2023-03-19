import React from 'react'
import BlackButton1 from '../components/BlackButton1'
import './pages.css'
import {BsFillPhoneFill, BsTwitter} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import cont from '../data/contacts.json'

const Home = () => {
    let txt = "I develop robust," +
    "secure and scalable software solutions for"+
    "all cadre of clients, from businesses to "+
    "institutions, companies to individuals. \n"+
    "Do you have a project contact me, let's talk"
  return (
    <div className='page' id='homePage' data-aos="zoom-in">
        <div className='container'>
            <div className='titles'>
                <span>
                    <h1 className='majorh1'>Soft</h1>
                    <h1 className='majorh1'>ware</h1>
                </span>
                <h1 className='majorh2'>Developer</h1>
                <span>
                    <p>🏙 Nairobi(Remote)</p>
                    <p></p>
                </span>
            </div>
            <div className='details'>
                <h1>Hello🙋🏽‍♂️, I am Derek Pesa,</h1>
                <p>{txt}</p>
                <span className='contacts'>
                    <a title='phone number' href={`tel:${cont.phone}`} target="_blank" ><BsFillPhoneFill /></a>
                    <a href={`mailto:${cont.email}?subject=Mail from your portfolio website`} target="_blank" ><MdEmail /></a>
                    <a href={`${cont.twitter}`} target="_blank" ><BsTwitter /></a>
                    <a href={`https://wa.me/${cont.whatsapp}`} target="_blank" ><RiWhatsappFill /></a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Home