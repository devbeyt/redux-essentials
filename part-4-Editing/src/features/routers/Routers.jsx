import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import EditPostForm from '../pages/posts/EditPostForm'
import Posts from './../pages/posts/Posts'
import SinglePostPage from './../pages/posts/SinglePostPage'

function Routers() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/posts' element={<Posts/>}/>
    <Route path="/posts/:postId" element={<SinglePostPage/>}/>
    <Route path="/editPost/:postId" element={<EditPostForm/>}/>
  </Routes>
  )
}

export default Routers