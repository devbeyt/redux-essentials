import { createSlice,nanoid,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const limit = 50;

const POST_URL = `https://jsonplaceholder.typicode.com/posts`


const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${POST_URL}`)
  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {    // add
        state.posts.push(action.payload)
      },
      prepare(title, content,userId) {  // update
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user:userId,
          }
        }
      },
      postUpdated(state, action) {
        const { id, title, content } = action.payload
        const existingPost = state.posts.find(post => post.id === id)
        if (existingPost) {
          existingPost.title = title
          existingPost.content = content
        }
      }
    }
  },

  extraReducers: {
     [fetchPosts.pending]:(state,action)=>{
         state.status = 'loading'
     },
     [fetchPosts.fulfilled]:(state,action)=>{
         state.status = 'succeeded'
         state.posts = state.posts.concat(action.payload)
    },
    [fetchPosts.rejected]:(state,action)=>{
         state.status = 'failed'
         state.error = action.error.message
    },
  }
})


export const {postAdded,postUpdated} = postsSlice.actions;
export const selectAllPosts = state=>state.posts.posts
export default postsSlice.reducer