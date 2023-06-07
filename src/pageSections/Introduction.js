import React from 'react'
import { RiGithubFill, RiMailFill, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri'
import '../styles/PageSections.css'
import BlueBtn from '../components/BlueBtn'
import useResume from '../Hooks/useResume'


const Introduction = () => {
    const { downloadCv } = useResume()
    const Link = ({path, icon}) => <a href={path}>{icon}</a>

    const hireMe = () => {
        let element = document.getElementById("work-with-me");
        if(element)element.scrollIntoView({behavior: "smooth"})
    }
  return (
    <div className='page-section' id='introduction'>
        <div className="text">
            <h1 style={{fontWeight: 'bolder'}}>SOFTWARE DEVELOPER</h1>
            <h1>Hello, I'm Derek</h1>
            <p>
                I develop websites, PWAs and cross-platform apps.
                Do you have a project? Dont hesitate to reach me. While you're here,
                I invite you over to my portfolio.
            </p>
            <span className='CTAs'>
                <BlueBtn text="Hire Me" action={hireMe} />
                <BlueBtn text="Download CV" action={downloadCv} />
            </span>
            
        </div>
        <div className='links-div'>
            <h3>Let's Connect</h3>
            <div className='links'>
                <div>
                    <Link path="https://wa.me/+254741120439" icon={<RiWhatsappFill />} />
                    <Link path="https://github.com/PessahDerek" icon={<RiGithubFill />} />
                    <Link path="mailto://pesaderek1738@gmail.com" icon={<RiMailFill />} />
                    <Link path="https://twitter.com/itsDevDerek" icon={<RiTwitterFill />} />
                </div>
                <div className='line' />
            </div>
        </div>
    </div>
  )
}

export default Introduction