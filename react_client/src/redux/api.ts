import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define an empty api service to inject OpenAPI endpoints into
export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  keepUnusedDataFor: 3600,
  tagTypes: ['FeedItem', 'Message'],
  endpoints: () => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPostsQuery, useGetUsersQuery, useGetUserByIdQuery } = apiSlice
