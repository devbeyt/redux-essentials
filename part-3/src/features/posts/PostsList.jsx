import React from 'react'
import {useSelector} from 'react-redux'
import { selectAllPosts } from './postsSlice'

function PostsList() {
  const allPosts = useSelector(selectAllPosts)

  const renderedPosts = allPosts.map(post=>{
    return <article>
       <h3>{post.title}</h3>
       <p>{post.content.substring(0,100)}</p>
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