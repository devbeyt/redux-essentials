import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Posts from './../pages/posts/Posts'
import SinglePostPage from './../pages/posts/SinglePostPage'

function Routers() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/posts' element={<Posts/>}/>
    <Route path="/posts/:postId" element={<SinglePostPage/>}/>
  </Routes>
  )
}

export default Routers