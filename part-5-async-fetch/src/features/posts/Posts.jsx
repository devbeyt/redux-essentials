import React from 'react'
import { AddPostForm } from '../posts/AddPostForm'
import PostsList from '../posts/PostsList'

function Posts() {
  return (
    <div className='container'>
        <AddPostForm/>
        <PostsList/>
    </div>
  )
}

export default Posts