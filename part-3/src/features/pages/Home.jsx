import React from 'react'
import { AddPostForm } from '../posts/AddPostForm'
import PostsList from './../posts/PostsList'

function Home() {
  return (
    <div>
        <AddPostForm/>
        <PostsList/>
    </div>
  )
}

export default Home