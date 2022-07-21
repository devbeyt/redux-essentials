import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice';
import { apiSlice } from '../features/api/apiSlice';

const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;
