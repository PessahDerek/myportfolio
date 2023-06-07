import React from 'react'
import Title from './Title'
import '../styles/Comp.css'
import { RiGithubFill, RiMailFill, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri'

const Footer = () => {

    const Link = ({path, icon}) => <a href={path}>{icon}</a>


    const links = <div className='links'>
        <Link path="https://wa.me/+254741120439" icon={<RiWhatsappFill />} />
        <Link path="https://github.com/PessahDerek" icon={<RiGithubFill />} />
        <Link path="mailto://pesaderek1738@gmail.com" icon={<RiMailFill />} />
        <Link path="https://twitter.com/itsDevDerek" icon={<RiTwitterFill />} />
    </div>

  return (
    <footer>
        <Title title={links} />
        <Title title={"Copyright "+new Date(Date.now()).getFullYear() + ", Derek Pesa"} />
    </footer>
  )
}

export default Footer