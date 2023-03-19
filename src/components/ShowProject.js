import React from 'react'
import BorderButton1 from './BorderButton1'
import './comp.css'

const ShowProject = ({project:{title, type, desc, image, stack}}) => {
  return (
    <div data-aos="flip-up"  className='showProject'>
        <section className='img'>
            <img src={image} alt="project" />
        </section>
        <section className='project-details'>
            <h1>{title} ({type})</h1>
            <p>{desc}</p>
            <span>
                {stack.reduce((tot, curr)=> tot + ", " + curr)}
            </span>
            <div className='btns'>
                <BorderButton1 text="Check it out" />
                <BorderButton1 text="Source Code" />
            </div>    
        </section>
    </div>
  )
}

export default ShowProject