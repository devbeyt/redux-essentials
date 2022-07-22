import React from 'react'
import { useParams,NavLink } from "react-router-dom";
import { useGetPostQuery } from '../api/apiSlice';

function SinglePostPage() {
    const {postId} = useParams();

    const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

    let renderedPost
    if(isFetching){
      renderedPost = <h1>Loading..</h1>
    }else if(isSuccess)(
      renderedPost =  <div>
      <h1>Single Post page</h1>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <NavLink to={`/editPost/${post.id}`}>
        Edit Post
      </NavLink>
    </div>
    )
  return (
    <div className='container'>
         {renderedPost}
    </div>
  )
}

export default SinglePostPage