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
        //const { id, value } = event.target;

        //setNewUser({...newUser, [id]: value});
        console.log(newUser)
        
        
    }

    return (
        <>
            <div className='bootstrap-iso'>
               <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" placeholder="Name" onChange={handleOnChange}/>
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="Email"/>
                    <label for="floatingPassword">Email</label>
                </div> 

                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="How can I help you?" id="floatingTextarea2" style={{height: "100px"}}/>
                    <label for="floatingTextarea2">How can I help you?</label>
                </div>
            </div>
            
        </>
    )
}

export default InputForm