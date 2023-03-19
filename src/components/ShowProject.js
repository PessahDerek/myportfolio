import React from 'react'
import BorderButton1 from './BorderButton1'
import './comp.css'

const ShowProject = ({project:{title, desc, image, stack}}) => {
  return (
    <div className='showProject'>
        <section className='img'>
            <img src={image} alt="project" />
        </section>
        <section className='project-details'>
            <h1>{title}</h1>
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