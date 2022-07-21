import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchPosts, selectAllPosts } from './postsSlice'
import {NavLink} from 'react-router-dom'
import PostAuthor from './PostAuthor'


function PostsList() {
  const allPosts = useSelector(selectAllPosts)
  const status = useSelector(state=>state.posts.status)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
},[dispatch])


  const renderedPosts = allPosts.map(post=>{
    return <article key={post.id} className="post">
       <h3>{post.title}</h3>
       <PostAuthor userId={post.user}/>
       <p>{post.content}</p>
       <NavLink to={`/posts/${post.id}`} className="button">View More</NavLink>
    </article>
  })

 

  if(status === 'loading'){
    return <h1>Loading...</h1>
  }else if(status === 'failed')
     return <h1>Failed!!!</h1>
  return (
    <section>
        <h1>Posts</h1>
        {renderedPosts}
    </section>
  )
}

export default PostsList