import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { brahmaUser } from '../../../node_server/models/user'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query<brahmaUser[], string>({
      query: () => `users/`,
    }),
    getUserById: builder.query<brahmaUser, string>({
      query: (id) => `user/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi
