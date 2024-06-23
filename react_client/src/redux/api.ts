import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { brahmaUser } from '../../../node_server/models/user'
import { Action, Task, Contribution } from '../../../node_server/models/activities'
import { FeedItem } from '../../../node_server/models/messages'


// Define an empty api service to inject OpenAPI endpoints into
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: () => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPostsQuery, useGetUsersQuery, useGetUserByIdQuery } = apiSlice
