import React from 'react'
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
    "Do you have a project? contact me, let's talk"
  return (
    <div className='page' id='homePage' data-aos="zoom-in">
        <div className='container'>
            <div className='titles'>
                <span>
                    <h1 className='majorh1'>Software</h1>
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
                    <a title='phone number' href={`tel:${cont.phone}`} target="_blank" rel="noreferrer" ><BsFillPhoneFill id='icon' /></a>
                    <a title='email address' href={`mailto:${cont.email}?subject=Mail from your portfolio website`} target="_blank" rel="noreferrer" ><MdEmail id='icon' /></a>
                    <a title='twitter link' href={`${cont.twitter}`} target="_blank" rel="noreferrer" ><BsTwitter id='icon' /></a>
                    <a title='whatsapp link' href={`https://wa.me/${cont.whatsapp}`} target="_blank" rel="noreferrer" ><RiWhatsappFill id='icon' /></a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Home