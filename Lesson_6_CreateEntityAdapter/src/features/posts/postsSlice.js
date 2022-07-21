import { createSlice,createAsyncThunk,createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

const limit = 15;

const POST_URL = `https://jsonplaceholder.typicode.com/posts/`

const postsAdapter = createEntityAdapter({
     selectId:(item)=>item.id
})

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${POST_URL}?_limit${limit}`)
  return response.data
})


export const addPost = createAsyncThunk('posts/add', async (post) => {
  const response = await fetch(POST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return await response.json();
});


export const updatePost = createAsyncThunk('post/update', async (post) => {
  const response = await fetch(`${POST_URL}${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return await response.json();
});


export const deletePost = createAsyncThunk('posts/delete', async (postId) => {
  const response = await fetch(`${POST_URL}${postId}`, {
    method: 'DELETE'
  });
  return await response.json();
});


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
       postAdded: postsAdapter.addOne,
       postUpdated: postsAdapter.updateOne,
       postDeleted: postsAdapter.removeOne,
  },

  extraReducers: {
     [fetchPosts.pending]:(state,action)=>{
         state.status = 'loading'
     },
     [fetchPosts.fulfilled]:(state,action)=>{
         state.status = 'succeeded'
         postsAdapter.setAll(state,action.payload)
    },
    [fetchPosts.rejected]:(state,action)=>{
         state.status = 'failed'
         state.error = action.error.message
    },
  }
})

export const {
  selectAll,
  selectById,
  selectIds,
  selectTotal,
} = postsAdapter.getSelectors(state => state.posts)
export const {postAdded,postUpdated,postDeleted} = postsSlice.actions;
export default postsSlice.reducer