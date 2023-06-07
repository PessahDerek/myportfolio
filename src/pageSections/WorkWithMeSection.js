import React from 'react'
import Title from '../components/Title'
import WorkWithMeForm from '../components/WorkWithMeForm'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import '../styles/PageSections.css'
import work from '../images/work.png'

const WorkWithMeSection = () => {

    const ThirdParty = ({text="", id, icon}) => (
        <a id={id} className='third-party-btn' href={/upwork/g.test(text.toLowerCase()) ? "https://www.upwork.com/freelancers/~012935538b24e52bb3" : "https://www.fiverr.com/derekpesa"} 
        >
            {icon}{text}
        </a>
    )
  return (
    <div data-aos="fade-up" className='page-section' id="work-with-me">
        <Title title="Work With Me" />
        <div className='children'>
            <section>
                <WorkWithMeForm src={work} alt="let's work together" />
            </section>
            <section className='third-parties'>
                <h2>Hire Me on 3rd Party Platforms</h2>
                <ThirdParty id="upwork" text='Hire Me On Upwork' icon={<SiUpwork />} />
                <ThirdParty id="fiverr" text="Hire Me On Fiverr" icon={<SiFiverr />} />
                <img src={work} alt="work with me" />
            </section>
        </div>
    </div>
  )
}

export default WorkWithMeSection