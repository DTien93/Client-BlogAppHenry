import React, {useState, useEffect, useContext} from 'react'
// import axios from 'axios'
import {useLocation} from 'react-router'
// Components
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'

import { getAllPosts } from '../apis/post.api'

import '../Layout/mainLayout.scss'

import { Context } from '../context/Context'

const MainLayout = () => {
    const { user: initUser } = useContext(Context)
    const [posts, setPosts] = useState([])
    const { search } = useLocation()
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAllPosts
      setPosts(res.data)
      console.log(res.data)
    }
    fetchPosts()
  }, [search])

    
  return (
      <div className='container'>
          <Navbar />
          <Header />
          <SearchBar/>
      <BlogList posts={posts} initUser={initUser}/>    
      </div>
  )
}

export default MainLayout