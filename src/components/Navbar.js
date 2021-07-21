import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

import './Navbar.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
           <nav  className="navbar">
                <div className="navbar-container">
                    <Link to="/portfolio_web">
                        <img className="navbar-logo" src={logo} alt="logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/portfolio_web" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Skills" className="nav-links" onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                    </ul> 
                    <Link to={{ pathname: 'https://www.linkedin.com/in/adrian-martin-0906a4bb/' }} target="_blank" className="nav-links" onClick={closeMobileMenu} rel="noreferrer">
                        <FaLinkedin  size="2em"/>
                    </Link>
                    <Link to={{ pathname: 'https://github.com/adrian-em94' }} target="_blank" className="nav-links" onClick={closeMobileMenu} rel="noreferrer">
                        <FaGithub  size="2em"/>
                    </Link>
                </div>
                
           </nav>
        </>
    )
}

export default Navbar
