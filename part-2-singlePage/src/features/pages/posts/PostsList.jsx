import React from 'react'
import {useSelector} from 'react-redux'
import { selectAllPosts } from './postsSlice'
import {NavLink} from 'react-router-dom'

function PostsList() {
  const allPosts = useSelector(selectAllPosts)

  const renderedPosts = allPosts.map(post=>{
    return <article key={post.id}>
       <h3>{post.title}</h3>
       <p>{post.content.substring(0,100)}</p>
       <NavLink to={`/posts/${post.id}`}>View More</NavLink>
    </article>
  })

  return (
    <section>
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  )
}

export default PostsList