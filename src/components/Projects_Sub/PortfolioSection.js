import React from 'react'
import '../../App.css'
import '../Projects_Sub/PortfolioSection.css'
import '../Projects_Sub/ARProjSection.css'
import PortfolioHome from '../../images/portfolio_home_smart.png'
import PortfolioProjectsPage from '../../images/projects_page.png'
import PortfolioProjectsFull from '../../images/projects_full.png'
import PortfolioProjectsSkill from '../../images/Skill_VM.png'
import { Link } from 'react-router-dom'

function PortfolioSection() {
    return (
        <section class="bg__secondary">
            <div className='rightFace_container'>
                <div className='r_split'>
                    <div className='right_img_split'>
                        <img className='second_img_left' src={PortfolioHome}  alt='Home page of the the Porfilio Website' 
                            onClick={()=> window.open(PortfolioHome, '_blank')}/>
                        <img className='second_img_left' src={PortfolioProjectsPage}  alt='Projects page displaying projects as clickable items' 
                            onClick={()=> window.open(PortfolioProjectsPage, '_blank')}/>
                        <img className='second_img_left' src={PortfolioProjectsFull}  alt='n/a' 
                            onClick={()=> window.open(PortfolioProjectsFull, '_blank')}/>
                        <img className='second_img_left' src={PortfolioProjectsSkill}  alt='n/a' 
                            onClick={()=> window.open(PortfolioProjectsSkill, '_blank')}/>  
                    </div>
                    <div className="right_split">
                        <h1>Portfolio Website - React</h1>
                        <hr className='hr_marTop'/>
                        <h2 className='margin_drop'>Features:</h2>
                        <ul className='right_ul'>
                            <li>Explore working projects</li>
                            <li>Step by Step demonstration of learned skills</li>
                            <li>Contact Information</li>
                            <li>Social Profiles: LinkedIn & GitHub</li>
                            <li>
                                <Link to={{ pathname: 'https://github.com/adrian-em94/portfolio_web' }} target='_blank'>GitHub</Link>
                            </li>
                        </ul> 
                    </div> 
                </div>
            </div>
        </section>
        )
}

export default PortfolioSection;