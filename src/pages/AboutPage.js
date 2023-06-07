import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import me from '../images/me.png'
import text from '../Data/AboutMe.json'
import '../styles/page.css'

const AboutPage = () => {
  return (
    <Page id="about-page">
        <Title title="About Me" />
        <div className='details'>
            <section>
                <img src={me} alt="a photo of me" />
                {text.about.split("#").map((txt, i)=><span key={i}><p>{txt}</p><br /></span>)}
            </section>
        </div>
    </Page>
  )
}

export default AboutPage