import React from 'react'
import BlogItem from '../BlogItem'

import '../BlogList/blogList.scss'

const BlogList = ({ posts, initUser }) => {
  return (
      <div className='blogList__wrapper'>
          {
              posts.map((post) => (
                  <BlogItem key={post._id} post={post} />
              ))
          }
    </div>
  )
}

export default BlogList