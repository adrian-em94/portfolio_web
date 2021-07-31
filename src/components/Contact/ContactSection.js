import React from 'react'
import InputForm from './InputForm'
import './ContactSection.css'
import { FaEnvelope, FaSms } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const ContactSection = () => {
    return (    
        <div className="outercontainer">
            <div className='innercontainer'>
                <div className='leftForm'>
                    <section>
                        <h1 style={{fontWeight: 'bolder'}}>Reach Out</h1>
                        <div className='contact_grouping'>
                            <FaEnvelope size='2em'/>
                            <p>adrianmartin2394@gmail.com</p>
                        </div>
                        <div className='contact_grouping'>
                            <FaSms size='2em'/>
                            <p>+1-714-261-5490</p>
                        </div>
                        <Link className='btn-cv' to="/files/AdrianMartinCV.pdf" target="_blank" download>
                            Download CV
                        </Link>  
                    </section>
                </div>
                <div className='rightForm'>
                    <section>
                        <h1 style={{marginBottom: '1em', fontWeight: 'bolder'}}>Contact</h1>
                        <InputForm /> 
                    </section>
                </div>
                
            </div>
            
        </div>
    )
}

export default ContactSection
