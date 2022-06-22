import React, { useRef, useContext } from 'react'
import '../Login/login.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/Context'


const Login = (props) => {
    const userRef = useRef()
    const passwordRef = useRef()

    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            window.location.replace("/")
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }

    return (
        <div className="container__login">
            <div className="wrapper">
                <h3 className="title">SIGN UP</h3>
                <form className="form" onSubmit = {handleSubmit}>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="username"
                        ref={userRef}
                    />
                    <input
                        className="form__input"
                        type="password"
                        placeholder="password"
                        ref={passwordRef}
                    />
                    <button
                        className="form__submit"
                        type="submit"
                        disabled={isFetching}
                    >
                        LOGIN
                    </button>
                    <div className="form__link">
                        <Link to="/register"> CREATE A NEW ACCOUNT</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login