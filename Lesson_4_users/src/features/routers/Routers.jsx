import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Posts from './../posts/Posts'
import SinglePostPage from '../posts/SinglePostPage'
import EditPostForm from '../posts/EditPostForm'



function Routers() {
  return (
    <Routes>
    <Route path='/' element={<Posts/>}/>
    <Route path="/posts/:postId" element={<SinglePostPage/>}/>
    <Route path="/editPost/:postId" element={<EditPostForm/>}/>
  </Routes>
  )
}

export default Routers