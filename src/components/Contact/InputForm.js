import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import './InputForm.css'
import emailjs from 'emailjs-com'

const initialState = {
    name: "",
    email: "",
    proposal: "",
}

const InputForm = () => {
    const [newUser, setNewUser] = useState(initialState)

    useEffect(() => {}, [newUser]);

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setNewUser({...newUser, [name]: value}); 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        emailjs.sendForm(
            `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, 
            `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, 
            '#myform', 
            `${process.env.REACT_APP_EMAILJS_USER_ID}`
        ).then(res=>{
            console.log(res)
        }).catch(err=> console.log(err))
    }

    return (
        <>
            <div className='bootstrap-iso'>
                <form id='myform' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input className="form-control" name="name"  value={newUser.name} onChange={handleOnChange} placeholder="Name"/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" value={newUser.email} onChange={handleOnChange} placeholder="Email" />
                        <label htmlFor="floatingPassword">Email</label>
                    </div> 

                    <div className="form-floating mb-3">
                        <textarea className="form-control" name="proposal" value={newUser.proposal} onChange={handleOnChange} placeholder="How can I help you?"  style={{height: "100px"}}/>
                        <label htmlFor="floatingTextarea2">How can I help you?</label>
                    </div>  

                    <button className='submit-btn' type='button' value='Submit' onClick={handleSubmit}>Submit</button> 
               </form>
            </div>
            
        </>
    )
}

export default InputForm