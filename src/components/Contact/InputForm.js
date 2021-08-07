import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import './InputForm.css'
import emailjs from 'emailjs-com'

const initialState = {
    name: "",
    email: "",
    proposal: "",
    nameError: "",
    proposalError: "",
    success: ""
}

const InputForm = () => {
    const [newUser, setNewUser] = useState(initialState)

    useEffect(() => {}, [newUser]);

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setNewUser({...newUser, [name]: value}); 
    }

    const validate = () => {
        let nameError = "";
        let proposalError = "";

        if(!newUser.name){
            nameError = 'Name is empty'
        }

        if(!newUser.proposal){
            proposalError = "No message being sent"
        }


        if(nameError || proposalError) {
            setNewUser({...newUser, nameError, proposalError})
            return false;
        }
        return true;


    }

    const handleSubmit = (event) => {
        //prevents default html submit form action of clearing form
        event.preventDefault()

        //checks to see if name, email, and message is not empty
        const isValid = validate();

        if(isValid){
            //send to emailjs
            emailjs.sendForm(
            `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, 
            `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, 
            '#myform', 
            `${process.env.REACT_APP_EMAILJS_USER_ID}`
            ).then(res=>{
                console.log(res)
                if(res.text === "OK"){
                    const success = "Successfully Sent";
                    setNewUser({...newUser, success})
                }  
            }).catch(err=> console.log(err))
            
            //reset state
            setNewUser(initialState)
        }

        
    }

    return (
        <>
            <div className='bootstrap-iso'>
                <form id='myform' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input className="form-control" name="name"  value={newUser.name} onChange={handleOnChange} placeholder="Name"/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className='ErrorMessages'>
                        {newUser.nameError}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" value={newUser.email} onChange={handleOnChange} placeholder="Email" />
                        <label htmlFor="floatingPassword">Email</label>
                    </div>
                    <div className='ErrorMessages'>
                        {newUser.proposalError}
                    </div> 
                    <div className="form-floating mb-3">
                        <textarea className="form-control" name="proposal" value={newUser.proposal} onChange={handleOnChange} placeholder="How can I help you?"  style={{height: "100px"}}/>
                        <label htmlFor="floatingTextarea2">How can I help you?</label>
                    </div>
                    <div className="successMessage">
                        {newUser.success}    
                    </div>  

                    <button className='submit-btn' type='submit' value='Submit'>Submit</button> 
               </form>
            </div>
            
        </>
    )
}

export default InputForm