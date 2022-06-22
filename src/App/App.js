import React, { useContext } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from '../Layout/MainLayout'
import Register from '../pages/Register'
import Login from '../pages/Login'
import WritePost from '../pages/WritePost'
import Profile from '../pages/Profile'
import Blog from '../pages/Blog'

import { Context } from '../context/Context'

const App = () => {
  const { user } = useContext(Context)
  return (
      <div>
         <Routes>
            <Route path='/' element={user ? <MainLayout/> : <Login />}/>
            <Route path='/post/:postId'element={<Blog/>}/>
            <Route path='/login'element={user ? <Navigate to ='/'/> : <Login/>}/>
            <Route path='/register'element={user ? <Navigate to ='/'/> : <Register/>}/>
            <Route path='/write'element={user ? <WritePost/> : <Register/>}/>
            <Route path='/profile'element={user ? <Profile/> : <Register/>}/>
          </Routes>        
      </div>
  )
}

export default App