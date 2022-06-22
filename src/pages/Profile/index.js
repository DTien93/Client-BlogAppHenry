import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'

import '../Profile/profile.scss'

import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'

const Profile = () => {
    const[file, setFile] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const { user, dispatch } = useContext(Context)
    const PF = process.env.REACT_IMG_FOLDER_APP

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "UPDATE_START" })
        const updatedUser = {
          userId: user._id,
          username,
          email,
          password,
        }
        if (file) {
          const data = new FormData()
          const filename = Date.now() + file.name
          data.append("name", filename)
          data.append("file", file)
          updatedUser.profilePic = filename
          try {
            await axios.post("/upload", data)
          } catch (err) {}
        }
        try {
          const res = await axios.put("/users/" + user._id, updatedUser)
          setSuccess(true)
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
          dispatch({ type: "UPDATE_FAILURE" })
        }
      }

    return (
        <div>
            <Navbar/>
            <Header/>
            <SearchBar/>
   <div className='profile'>
            <div className='profile__wrapper'>
                <div className='profile__Title'>
                    <span className='profile__updateTitle'>Cập nhật tài khoản</span>
                    <span className='profile__deleteTitle'>Xóa tài khoản</span>
                </div>
                <form className='profile__Form' onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className='profile__PP'>
                            <img
                                 src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                                 alt=""
                            />
                    </div>
                    <label htmlFor='fileInput'>
                    </label>
                    <input
                            type='file'
                            id='fileInput'
                            onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label>Username</label>
                    <input
                            type='text'
                            placeholder={user.username}
                            onChange={(e) => setUsername(e.target.value)}    
                    />
                    <label>Email</label>
                    <input 
                            type='email'
                            placeholder={user.email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                            type='password'
                            placeholder={user.password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='profile__submit' type='submit'>
                        Cập nhật
                    </button>
                        {
                            success && (
                            <span
                            style={{ color: "green", textAlign: "center", marginTop: "20px" }}
                            >
                            Profile has been updated...
                            </span>
                    )}
                </form>
                </div>
            </div>
        </div>
     
    )
}

export default Profile