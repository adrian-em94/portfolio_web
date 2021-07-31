import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import './InputForm.css'

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
        console.log(newUser.name, newUser.email, newUser.proposal)
    }

    return (
        <>
            <div className='bootstrap-iso'>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input className="form-control" name="name"  value={newUser.name} onChange={handleOnChange} placeholder="Name"/>
                        <label for="floatingInput">Name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" name="email" value={newUser.email} onChange={handleOnChange} placeholder="Email" />
                        <label for="floatingPassword">Email</label>
                    </div> 

                    <div class="form-floating mb-3">
                        <textarea class="form-control" name="proposal" value={newUser.proposal} onChange={handleOnChange} placeholder="How can I help you?"  style={{height: "100px"}}/>
                        <label for="floatingTextarea2">How can I help you?</label>
                    </div>  

                    <button className='submit-btn' type='button' value='Submit' onClick={handleSubmit}>Submit</button> 
               </form>
            </div>
            
        </>
    )
}

export default InputForm