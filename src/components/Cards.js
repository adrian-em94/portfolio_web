import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import ArticHomePic from '../images/artic_home.png'
import ADPic from '../images/microsoftad-logo.svg'

function Cards() {
    return (
        <div className="cards">
            <h1 style={{fontWeight: 'bolder'}}>Check out my Projects and Skills!</h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={ArticHomePic}
                            text="First Kivy Application with Python"
                            label="Kivy App"
                            path='/Projects'
                        />
                        <CardItem
                            src={ADPic}
                            text="Windows and Azure Active Directory"
                            label="ADS"
                            path='/Skills'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;