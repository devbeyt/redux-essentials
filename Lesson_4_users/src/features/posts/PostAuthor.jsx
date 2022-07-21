import React from 'react'
import { useSelector } from 'react-redux'

function PostAuthor({userId}) {
    const author = useSelector(state =>
        state.users.find(user => user.id === userId)
      )

  return (
    <div>{author ? author.name : 'Unknown author'}</div>
  )
}

export default PostAuthor




