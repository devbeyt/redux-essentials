import React from 'react'
import {useSelector} from 'react-redux'
import { selectAllPosts } from './postsSlice'
import {NavLink} from 'react-router-dom'
import PostAuthor from './PostAuthor'


function PostsList() {
  const allPosts = useSelector(selectAllPosts)

  const renderedPosts = allPosts.map(post=>{
    return <article key={post.id} className="post">
       <h3>{post.title}</h3>
       <PostAuthor userId={post.user}/>
       <p>{post.content.substring(0,100)}</p>
       <NavLink to={`/posts/${post.id}`} className="button">View More</NavLink>
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