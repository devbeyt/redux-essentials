import React from 'react'
import { useParams,NavLink } from "react-router-dom";
import { useGetPostQuery } from '../api/apiSlice';

function SinglePostPage() {
    const {postId} = useParams();
    const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

    let content
    if (isFetching) {
      content = <h1>Loading...</h1>
    } else if (isSuccess) {
      content = (
        <article className="post">
            <h1>Single Post page</h1>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <NavLink to={`/editPost/${post.id}`}>
          Edit Post
        </NavLink>
        </article>
      )
    }

  return (
    <div className='container'>
       {content}
    </div>
  )
}

export default SinglePostPage