import React from 'react'
import {  postDeleted } from './postsSlice'
import {NavLink} from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { useGetPostsQuery } from '../api/apiSlice'
import {useDispatch} from 'react-redux'


function PostsList() {
   const dispatch = useDispatch()
   const { data, error, isLoading } = useGetPostsQuery()


      
  return (
    <section>
        <h1>Posts</h1>  
        {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : (
      data.map(post=>{
        return <article key={post.id} className="post">
       <h3>{post.title}</h3>
       <PostAuthor userId={post.user}/>
       <p>{post.content}</p>
       <button type='button' className='delete_button'
        onClick={()=>dispatch(postDeleted(post.id))}>delete post</button>
       <NavLink to={`/posts/${post.id}`} className="button">View More</NavLink>
     </article>
     })
    ) }
    </section>
  )

    }

export default PostsList