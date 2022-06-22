import React, { useContext, useState } from 'react'
import '../WritePost/write.scss'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import Footer from '../../components/Footer'
import { Context } from '../../context/Context'
import axios from 'axios'

const WritePost = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const [categories, setCategories] = useState('')
    const { user } = useContext(Context)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const newPost = {
        username: user.username,
        title,
        desc,
        categories
      }
      if (file) {
        const data =new FormData()
        const filename = Date.now() + file.name
        data.append('name', filename)
        data.append('file', file)
        newPost.photo = filename
        try {
          await axios.post('/upload', data)
        } catch (err) {
          console.log(err)
        }
      }
      try {
        const res = await axios.post('/posts', newPost)
        window.location.replace('/')
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
  }
  
  console.log(file, title, desc, categories)

    return (
        <>
        <Navbar/>
        <Header/>
        <SearchBar/>
        <div>
        <form className='form__create' onSubmit={handleSubmit}>
          <h2 className='form__title'>Viết bài</h2>
          <label className='form__label'>
            Tiêu đề
          </label>
          <input
              type='text'
              className='form__input'
              placeholder='Nhập tiêu đề'
              onChange={(e)=>setTitle(e.target.value)}
          />
          <label className='form__label'>
            Nội dung bài viết
          </label>
          <textarea
              type='text'
              className='form__input'
              autoFocus={true}
              onChange={(e)=>setDesc(e.target.value)}
            />
            <label className='form__label'>
            Loại bài viết
          </label>
          <input
              type='text'
              className='form__input'
              placeholder='Chọn tiêu đề bài viết'
              onChange={(e)=>setCategories(e.target.value)}
          />
          <input
              type='file'
              id='fileInput'
              className='form__input'
              onChange={(e) => setFile(e.target.files[0])}
          />
          <button
              type='submit'                                                                                                                                                                                                                                                                                                                                                                                                                         
              value='Create'
              className='form__submit'
          >
            Đăng bài      
          </button>
        </form>
        </div>
        <Footer/>
      </>
   
  )
}

export default WritePost