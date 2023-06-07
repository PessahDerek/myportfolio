import React from 'react'
import Page from '../components/Page'
import Introduction from '../pageSections/Introduction'
import '../styles/page.css'
import PortfolioSection from '../pageSections/PortfolioSection'
import WorkWithMeSection from '../pageSections/WorkWithMeSection'
import SkillsSection from '../pageSections/SkillsSection'
import topRight from '../images/topRight.png'
import botleft from '../images/botLeft.png'
import onComp from '../images/onComp.png'

const HomePage = () => {

    return (
        <Page id='home-page'>
            <img src={topRight} id='top-right' alt="" />
            <img src={botleft} id='bot-left' alt="" />
            <img src={onComp} id="on-comp" alt="" />
            <Introduction />
            <SkillsSection />
            <PortfolioSection />
            <WorkWithMeSection />
        </Page>
    )
}

export default HomePage