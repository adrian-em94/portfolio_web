import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div>
            <form>
                <div className='grouping'>
                    <label>Name</label>
                    <input type='text' name='name' />
                </div>
                <div className='grouping'>
                    <label>Email</label>
                    <input type='email' name='user_email' />
                </div>
                <div className='grouping'>
                    <label>Message</label>
                    <textarea name='message' rows='4' />
                </div>
            </form>
        </div>
    );
};


export default Form;
