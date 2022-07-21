import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({

    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: `https://jsonplaceholder.typicode.com/` }),

    endpoints: builder => ({
        getPosts: builder.query({
            query: () => 'posts'
        }),
        getPost: builder.query({
            query: postId => `posts/${postId}`
        }),addPost: builder.mutation({
            query: (body)=>({
                url: `posts`,
                method: `POST`,
                body,
            })
        })
    })
})


export const { useGetPostsQuery, useGetPostQuery,useAddPostMutation } = apiSlice