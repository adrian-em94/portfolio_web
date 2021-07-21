import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import VBox from '../images/virtualbox-icon.svg'
import ADPic from '../images/microsoftad-logo.svg'

function SkillSection() {

    return (
        <div className="cards">
            <h1>Skills</h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={VBox}
                            text="Virtual Box - Virtual Machine"
                            label="Virtualization"
                            path='/VirtualBox'
                        />
                        <CardItem
                            src={ADPic}
                            text="Active Directory Domain Services"
                            label="AD"
                            path='/ADDS'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SkillSection;