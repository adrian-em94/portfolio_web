import React from 'react';
import '../../App.css';
import '../Projects_Sub/PortfolioSection.css';
import '../Projects_Sub/ARProjSection.css';
import PortfolioHome from '../../images/portfolio_home.png'
import PortfolioProjectsPage from '../../images/projects_page.png'
import PortfolioProjectsFull from '../../images/projects_full.png';
import PortfolioProjectsSkill from '../../images/Skill_VM.png';
import { Link } from 'react-router-dom';

function PortfolioSection() {
    return (
        <section className="bg__secondary">
            <div className='rightFace_container'>
                <div className='right_img_split'>
                    <div className='ImageContainer'>
                        <img className='second_img_left' 
                            src={PortfolioHome} 
                            alt='artic application home page with a dome buidling with turquoise color lights in the night sky on the center.'
                            onClick={()=> window.open(PortfolioHome, '_blank')} />
                        <p>Portfolio Home Page</p>
                    </div>
                    <div className='ImageContainer'>
                        <img className='second_img_left' 
                            src={PortfolioProjectsPage} 
                            alt='Depiction of projects in cards style grid'
                            onClick={()=> window.open(PortfolioProjectsPage, '_blank')} />
                        <p>Project Grid Page</p> 
                    </div>
                    <div className='ImageContainer'>
                        <img className='second_img_left'
                            src={PortfolioProjectsFull} 
                            alt='Depcition of projects page in detail'
                            onClick={()=> window.open(PortfolioProjectsFull, '_blank')} />
                        <p>Project - More Detail</p>   
                    </div>
                    <div className='ImageContainer'>
                        <img className='second_img_left'
                            src={PortfolioProjectsSkill} 
                            alt='Depiction of skills tutorial page'
                            onClick={()=> window.open(PortfolioProjectsSkill, '_blank')} />
                        <p>Skills Tutorial</p>
                    </div>
                </div> 
                <div className="right_split">
                    <h1>Portfolio Website - React</h1>
                    <hr className='hr_marTop'/>
                    <h3 className='margin_drop'>Features:</h3>
                    <ul className='right_ul'>
                        <li>Explore working projects</li>
                        <li>Step by Step demonstration of learned skills</li>
                        <li>Contact Information w/ Form Submission</li>
                        <li>EmailJs: sends message directly to email</li>
                        <li>Social Profiles: LinkedIn & GitHub</li>
                        <li>
                            <Link to={{ pathname: 'https://github.com/adrian-em94/portfolio_web' }} target='_blank'>GitHub</Link>
                        </li>
                    </ul> 
                </div> 
            </div>
        </section>
        )
}

export default PortfolioSection;