import React, { useState, useEffect, useContext } from 'react'
import EmptyList from '../../components/EmptyList'
import '../Blog/blog.scss'
import { Link } from 'react-router-dom' 
import axios from 'axios'
import { useLocation } from 'react-router'
import { Context } from '../../context/Context'
import Chip from '../../components/Chip'
  
const Blog = () => {
  const PF = 'http://localhost:5000/images/'
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updateMode, setUpdateMode] = useState(false)
  const { user } = useContext(Context)
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path)
      setPost(res.data)
      setDesc(res.data.desc)
      setTitle(res.data.title)
    }
    getPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      })
      window.location.replace('/')
    } catch (err) {}
  }

   const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      })
      setUpdateMode(false)
    } catch (err) {}
  }

  return (
    <div className='blog__Post'>
      {post ? (
        <div className='blog__Post__Wrapper'>
          <Link className='blog__Post__Link' to='/'>
            <span>&#8592;</span> <span>Quay lại</span>
          </Link>
          <p className='blog__date'>Published {post.createdAt}</p>
          <div className='blog__category'> <Chip  label={post.categories}/></div>   
          {post.photo && (
            <img src={PF + post.photo} alt='logo' className='blog__Post__Img' />
          )}
          {updateMode ? (
            <input
              type='text'
              value={title}
              className='blog__Post__TitleInput'
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className='blog__Post__Title'>
              {title}
              {post.username === user?.username && (
                <div className='blog__Post__Edit'>
                  <i
                    className='blog__Post__Icon far fa-edit'
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className='blog__Post__Icon far fa-trash-alt'
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </h1>
          )}
          <div className='blog__Post__Info'>
            <span className='blog__Post__Author'>
              Tác giả:
              <Link  style={{ textDecoration: 'none' }} to={`/?user=${post.username}`} className='link'>
                <b className='blogUsername__author'> {post.username}</b>
              </Link>
            </span>
            <span className='blog__Post__Date'>
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea
              className='blog__Post__DescInput'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className='blog__Post__Desc'>{desc}</p>
          )}
          {updateMode && (
            <button className='blog__Post__Button' onClick={handleUpdate}>
              Cập nhật
            </button>
          )}
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  )
}

export default Blog