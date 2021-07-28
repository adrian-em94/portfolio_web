import React from 'react'
import Form from './Form'
import './ContactSection.css'

function ContactSection() {
    return (
        <div className="outercontainer">
            <div className='innercontainer'>
                <div className='leftForm'>
                    <h1>Hoot Hoot!</h1>
                    <p>Where is everyone!!</p>
                </div>
                <div className='rightForm'>
                    <h1>Contact</h1>
                    <Form />
                </div>
                
            </div>
            
        </div>
    )
}

export default ContactSection
