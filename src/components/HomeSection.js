import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HomeSection.css'

function HomeSection() {
    return (
        <div className='home-container'>
            <h1>Tech Support<br />& <br />
            Front-End Developer</h1>
            <p>What are you waiting for?</p>
            <div className='home_btns'>
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                        Contact Me
                    </Button>
            </div>
        </div>
    )
}

export default HomeSection;