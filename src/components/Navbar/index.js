import React, { useContext, useState, useEffect } from 'react'
import '../Navbar/navbar.scss'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'
import { ImExit } from 'react-icons/im'

const Navbar = () => {
    const [cats, setCats] = useState(null)
    const { user, dispatch } = useContext(Context)

    const handleLogout = () => {
        dispatch({type: 'LOG_OUT'})
    }
    
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    }, [])

    console.log(cats)
    return (
        <nav className="navbar">
            <div className="navbar__top__left">
                <Link to="/">
                    <img className="navbar__top__img" src="https://i.pinimg.com/originals/58/c8/40/58c840666765cbc47737dac09b84781e.jpg" alt="logo" />
                </Link>
            </div>
            <div className="navbar__top__center">
                <ul className="navbar__top__list">
                <Link to="/" style={{ textDecoration: 'none' }}><li className="navbar__top__item">Trang chủ</li></Link>
                    <Link to="/font-end" style={{ textDecoration: 'none' }}><li className="navbar__top__item">Font-End</li></Link>
                    <Link to="/back-end" style={{ textDecoration: 'none' }}><li className="navbar__top__item">Back-End</li></Link>
                    {user && <Link to="/write" style={{ textDecoration: 'none' }}><li className="navbar__top__item">Viết bài</li></Link>}
                <Link to="/contact" style={{ textDecoration: 'none' }}><li className="navbar__top__item">Liên hệ</li></Link>      
             
                </ul>
            </div>
            <div className="navbar__top__right">
                {user ? (
                    <Link to="/profile" style={{textDecoration: 'none' }}>
                        <p className="navbar__top__profile" style={{ textDecoration: 'none' }}>
                         HI, { user.username }
                        </p>
                    </Link>
                ) : (
                    <ul className="navbar__top__list">
                    <Link to="/login" className="navbar__top__item">
                            <li>Đăng nhập</li>
                    </Link>
                </ul>      
                )}
                <li className="navbar__top__item" onClick={handleLogout}>
                    {user && <ImExit/>}
                </li>    
            </div>
        </nav>
    )
}

export default Navbar
 