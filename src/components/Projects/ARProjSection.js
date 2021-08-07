import React from 'react'
import '../Projects/ARProjSection.css'
import ArtHome from '../../images/artic_home.png'
import ArtPark from '../../images/proof_of_initialization.png'
import ArtOcc from '../../images/occupied_stall_result_smart.png'
import ArtAcc from '../../images/email_exists.png'
import { Link } from 'react-router-dom'

const ARProjSection = () => {
    return (
    <section className="bg__primary">
        <div className='leftFace_container'>
            <div className='left_split'>
                <h1>Artic App - Python - Kivy </h1>
                <hr className='hr_marTop'/>
                <h3 className='margin_drop'>Features:</h3>
                <ul className='left_ul'>
                    <li>Check parking lot status</li>
                    <li>Submit parking form to reserve parking spot</li>
                    <li>Error checking in user input parking form</li>
                    <li>Create Account</li>
                    <li>Keep track of balance on account</li>
                    <li>Integrated with Google Firebase Database</li>
                    <li>
                        <Link to={{ pathname: 'https://github.com/' }} target="_blank">GitHub</Link>
                    </li>
                </ul> 
            </div>
            <div className='left_img_split'>
                <div className='ImageContainer'>
                    <img className='first_img_right' 
                        src={ArtHome} 
                        alt='artic application home page with a dome buidling with turquoise color lights in the night sky on the center.'
                        onClick={()=> window.open(ArtOcc, '_blank')} />
                    <p>Artic App Home Page</p>
                </div>
                <div className='ImageContainer'>
                    <img className='first_img_right' 
                        src={ArtPark} 
                        alt=''
                        onClick={()=> window.open(ArtPark, '_blank')} />
                    <p>Parking lot vacancy status page</p> 
                </div>
                <div className='ImageContainer'>
                    <img className='first_img_right'
                        src={ArtOcc} 
                        alt='Error popup that explains the form submission is invalid because the parking spot is already occupied'
                        onClick={()=> window.open(ArtOcc, '_blank')} />
                    <p>Form Validation Example</p>   
                </div>
                <div className='ImageContainer'>
                    <img className='first_img_right'
                        src={ArtAcc} 
                        alt='Account creation page with an error that explains that the email has already been taken'
                        onClick={()=> window.open(ArtAcc, '_blank')} />
                    <p>Login Page - Email Validation</p>
                </div>
            </div>   
        </div>
    </section>
    )
}

export default ARProjSection;