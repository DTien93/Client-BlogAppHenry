import React, { useState } from 'react'

import '../Register/register.scss'

import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => { 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password
            })
            res.data && window.location.replace('/login')
        } catch (error) {
            setError(true)
        }
    }
    return (
        <div className='container__register'>
            <div className='wrapper'>
                <h3 className='title'>REGISTER</h3>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text'
                        className='form__input'
                        placeholder='username'
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input
                        type='email'
                        className='form__input'
                        placeholder='email'
                        onChange={(e)=>setEmail(e.target.value)}
                    />                     
                    <input
                        type='password'
                        className='form__input'
                        placeholder='password' 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button
                        className='form__submit'
                        type='submit'
                    >
                        Register
                    </button>
                    <button
                        className='form__submit'
                        type='submit'
                    >
                        <Link  style={{color: 'white', textDecoration: 'none'}} className='link' to='/login'>
                            Login
                        </Link>
                    </button>
                    {error && <span style={{color:'red', marginTop:'10px'}}>Something went wrong!</span>}
                </form>
            </div>
        </div>
    )
}

export default Register