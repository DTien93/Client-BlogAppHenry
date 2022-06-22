import React, { useContext } from 'react'

import '../BlogItem/blogItem.scss'

import { Link } from 'react-router-dom'

import Chip from '../Chip'
import { Context } from '../../context/Context'

const BlogItem = ({ post, initUser }) => {
  const { user } = useContext(Context)
  const PF = 'http://localhost:5000/images/'
  return (
    <div className='blogItem__wrap'>
    <Link to={`/post/${post._id}`} className='blogItem__cover'>
        { post.photo && <img className='blogItem__cover' src={PF + post.photo} alt='cover' 
    />}
    </Link>
      <Chip label={post.categories}></Chip>
      <span>{new Date(post.createdAt).toDateString}</span>
    <Link to={`/post/${post._id}`} className='blogItem__heading'>
        <h3 >{post.title}</h3>
    </Link>

    <Link to={`/post/${post._id}`} className='blogItem__desc'>
         <p>{post.desc}</p>
    </Link>

      <footer className='blogItem__footer'>
        <div className='blogItem__author'>
          <img className='blogItem__avatar' src={PF + user.profilePic} alt='' />
          <div>
            <h6 className='blogItem__authorName'>Henry</h6>
            <p className='blogItem__postDay'>{new Date(post.createdAt).toDateString()}</p>
          </div>
        </div>
            <Link className='blogItem__link' to={`/post/${post._id}`}>
                ➝
            </Link>
    </footer>
</div>
  )
}

export default BlogItem