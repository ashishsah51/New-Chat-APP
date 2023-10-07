import React from 'react'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Let's Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='Enter your name'></input>
                    <input type='email' placeholder='email'></input>
                    <input type='password' placeholder='password'></input>
                    <input type='file'></input>
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>

        </div>
    )
}

export default Register;