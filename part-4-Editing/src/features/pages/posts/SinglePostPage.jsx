import React from 'react'
import { useSelector } from 'react-redux'
import { useParams,NavLink } from "react-router-dom";

function SinglePostPage() {
    const {postId} = useParams();
    const post = useSelector(state=>state.posts.find(post=>post.id === postId))
  return (
    <div className='container'>
        <h1>Single Post page</h1>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <NavLink to={`/editPost/${post.id}`}>
          Edit Post
        </NavLink>
    </div>
  )
}

export default SinglePostPage