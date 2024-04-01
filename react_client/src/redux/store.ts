import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import actionsReducer from './activitiesSlice'
import { apiSlice } from './api'

const store = configureStore({
  reducer: {
    users: usersReducer,
    actions: actionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
