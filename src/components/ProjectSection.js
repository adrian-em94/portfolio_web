import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import './ProjectSection.css'
import ArticHomePic from '../images/artic_home.png'
import PortfolioHome from '../images/portfolio_home.png'

function ProjectSection() {

    return (
        <div className="cards">
            <h1>Projects</h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={ArticHomePic}
                            text="First Kivy Application with Python"
                            label="Kivy App"
                            path='/Projects_Sub'
                        />
                        <CardItem
                            src={PortfolioHome}
                            text="Personal Portfolio Webpage"
                            label="Website"
                            path='/Projects_Sub'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;