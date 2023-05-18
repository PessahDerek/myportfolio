import React from 'react'
import BorderButton1 from './BorderButton1'
import './comp.css'
import { useNavigate } from 'react-router-dom'

const ShowProject = ({project:{title, type, desc, image, stack, link, code}}) => {
    const navigate = useNavigate()

    const goTo = () => {
        window.open(link, '_blank')
    }
    const gotoGitHub = () => {
        if(!code) return alert('Sorry, this project is owned by a client or is of a private repository')
        window.open(code, '_blank')
    }

    return (
    <div data-aos="flip-up"  className='showProject' onClick={window.innerWidth < 600 ? goTo : ()=>{}}>
        <h1>{title} ({type})</h1>
        <section className='img'>
            <img src={image} alt="project" />
        </section>
        <section className='project-details'>
            <h1>{title} ({type})</h1>
            <p>{desc}</p>
            <div className='btns'>
                <BorderButton1 action={goTo} text="Check it out" />
                <BorderButton1 action={gotoGitHub} text="Source Code" />
            </div>    
        </section>
        <span>
            {stack.reduce((tot, curr)=> tot + ", " + curr)}
        </span>
    </div>
  )
}

export default ShowProject