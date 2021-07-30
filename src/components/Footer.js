import React from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer_container'>
            <div className='content'>
                <h3>Adrian</h3>
                <h5>Tech Support & Front End Developer</h5>
                <div className="links">
                    <Link className='a_link' to="/Projects">
                        Projects
                    </Link>
                    <Link className='a_link' to="/Skills">
                        Skills
                    </Link>
                    <Link className='a_link'to="/">
                        Contact Me
                    </Link> 
                </div>
                <div className='socials'>
                    <Link className='soc_link' to={{ pathname: 'https://www.linkedin.com/in/adrian-martin-0906a4bb/' }} target="_blank" rel="noreferrer">
                        <FaLinkedin  size="2em"/>
                    </Link>
                    <Link className='soc_link' to={{ pathname: 'https://github.com/adrian-em94' }} target="_blank" rel="noreferrer">
                        <FaGithub  size="2em"/>
                    </Link>
                </div>   
            </div>
            
            
        </div>
    )
}

export default Footer;