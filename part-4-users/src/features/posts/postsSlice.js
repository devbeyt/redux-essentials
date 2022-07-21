import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {    // add
        state.push(action.payload)
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
      }
    }
  }
})


export const {postAdded,postUpdated} = postsSlice.actions;
export const selectAllPosts = state=>state.posts
export default postsSlice.reducer