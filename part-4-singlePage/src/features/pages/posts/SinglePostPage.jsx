import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

function SinglePostPage() {
    const {postId} = useParams();
    const post = useSelector(state =>
      state.posts.find(post => post.id === postId)
    )
    console.log(post)
  return (
    <div className='container'>
        <h1>Single Post page</h1>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
  )
}

export default SinglePostPage