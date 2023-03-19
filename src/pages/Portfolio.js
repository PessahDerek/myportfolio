import React from 'react'
import ShowProject from '../components/ShowProject'
import projects from '../data/projects'
import './pages.css'

const Portfolio = () => {
    
  return (
    <div className='page' id='portfolioPage'>
        <div className='container'>
            <h1 className='titleh1'>Portfolio</h1>
            <div className='projects'>
                {projects.map((proj, indx)=><ShowProject key={indx} project={proj} />)}
            </div>
        </div>
    </div>
  )
}

export default Portfolio