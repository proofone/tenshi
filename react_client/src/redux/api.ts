import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { brahmaUser } from '../../../node_server/models/user'
import { Action, Task, Contribution } from '../../../node_server/models/activities'


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

export const actionApi = createApi({  // TODO: 
  reducerPath: 'actionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getActions: builder.query<Action[], string>({
      query: () => `actions/`,
    }),
    getActionById: builder.query<Action, string>({
      query: (id) => `action/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi
export const { useGetActionsQuery, useGetActionByIdQuery } = actionApi
