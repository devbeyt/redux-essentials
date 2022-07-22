import React from 'react'
import {NavLink} from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { useGetPostsQuery } from '../api/apiSlice'


function PostsList() {

  const { data = [], error, isLoading } = useGetPostsQuery()



   let content =   data.map(post=>(
    <article key={post.id} className="post">
       <h3>{post.title}</h3>
       <PostAuthor userId={post.user}/>
       <p>{post.content}</p>
       <NavLink to={`/posts/${post.id}`} className="button">View More</NavLink>
    </article>
  ))

  return (
    <section>
        <h1>Posts</h1>
        {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : data ? (  
      content
    ) : null}

    </section>
  )
}

export default PostsList