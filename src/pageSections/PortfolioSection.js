import React from 'react'
import { projects } from '../Data/projects'
import ShowProject from '../components/ShowProject'
import Title from '../components/Title'

const PortfolioSection = () => {
    
  return (
    <div data-aos="fade-up" className='page-section' id="portfolio">
        <Title title={"Featured Projects"} />
        <div className='projects'>
            {projects.map(project => <ShowProject key={project.title} project={project} />)}
        </div>
    </div>
  )
}

export default PortfolioSection