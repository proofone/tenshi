import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Action, Task, Contribution } from '../../../node_server/models/activities'
import { testUsers }  from '../../../tests/users_test_data'


// Define a type for the slice state 
export interface actionsState {
    actions: Action[]
}

const initialState: actionsState = {
    actions: []
}

export const actionsSlice = createSlice({
  name: 'actions',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    extend: (state, action: PayloadAction<Action[]>) => {
      state.actions = state.actions.concat(action.payload)
    }
  }
})

export const { extend } = actionsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectActions = (state: RootState) => state.actions

export default actionsSlice.reducer
