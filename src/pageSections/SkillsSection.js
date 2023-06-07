import React from 'react'
import Title from '../components/Title'

const SkillsSection = () => {
  return (
    <div data-aos="fade-up" className='page-section' id="skills-section">
        <Title title="My Skills and Tools" />
        <div className='set'>
            <span>
                <Title title="Languages" />
                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                </ul>
            </span>
            <span>
                <Title title="Frameworks/Libraries" />
                <ul>
                    <li>ReactJs</li>
                    <li>NextJS</li>
                    <li>ExpressJs</li>
                    <li>Tailwind</li>
                </ul>
            </span>
            <span>
                <Title title="Tools" />
                <ul>
                    <li>Github</li>
                    <li>Figma</li>
                    <li>AdobeXD</li>
                    <li>InkScape</li>
                </ul>
            </span>
        </div>
    </div>
  )
}

export default SkillsSection