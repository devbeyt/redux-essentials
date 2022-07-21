import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {    // add
        state.push(action.payload)
      },
      prepare(title, content) {  // update
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
  }
})


export const {postAdded,postUpdated} = postsSlice.actions;
export const selectAllPosts = state=>state.posts
export default postsSlice.reducer