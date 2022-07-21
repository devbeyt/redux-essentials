import React, { useState } from 'react'
import {useSelector } from 'react-redux'
import { useAddPostMutation } from '../api/apiSlice'


export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const [addPost, { isLoading }] = useAddPostMutation()

  const users = useSelector(state => state.users)


  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const canSave = [title, content, userId].every(Boolean) && !isLoading

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addPost({ title, content, user: userId }).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      }
    }
  }

  
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))


  return (
    <section>
    <h2>Add a New Post</h2>
    <form className='form'>
      <label htmlFor="postTitle">Post Title:</label>
      <input
        type="text"
        id="postTitle"
        name="postTitle"
        placeholder="What's on your mind?"
        value={title}
        onChange={onTitleChanged}
      />
      <label htmlFor="postAuthor">Author:</label>
      <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
        <option value=""></option>
        {usersOptions}
      </select>
      <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={onContentChanged}
      />
      <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
        Save Post
      </button>
    </form>
  </section>
  )
}