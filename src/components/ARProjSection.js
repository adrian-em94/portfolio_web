import React from 'react'
import './AR_Proj_Section.css'
import ArtHome from '../images/artic_home.png'
import ArtPark from '../images/proof_of_initialization.png'
import ArtOcc from '../images/occupied_stall_result_smart.png'
import ArtAcc from '../images/email_exists.png'
import { Link } from 'react-router-dom'

function AR_Proj_Section() {
    return (
    <section class="bg__primary">
        <div className='leftFace_container'>
            <div class='left_split'>
                <h1>Artic App - Python - Kivy </h1>
                <hr className='hr_marTop'/>
                <h2 className='margin_drop'>Features:</h2>
                <ul class='left_ul'>
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
            <div class='left_img_split'>
                <img className='first_img_right' src={ArtHome}  alt='Home page of the Kivy App for the Artic Project App' 
                    onClick={()=> window.open(ArtHome, '_blank')}/>
                <img className='first_img_right' src={ArtPark}  alt='Parking page depicting the parking spots that are vacant and occupied' 
                    onClick={()=> window.open(ArtPark, '_blank')}/>
                <img className='first_img_right' src={ArtOcc}  alt='Error popup that explains the form submission is invalid because the parking spot is already occupied' 
                    onClick={()=> window.open(ArtOcc, '_blank')}/>
                <img className='first_img_right' src={ArtAcc}  alt='Account creation page with an error that explains that the email has already been taken' 
                    onClick={()=> window.open(ArtAcc, '_blank')}/>  
            </div>   
        </div>
    </section>
    )
}

export default AR_Proj_Section;