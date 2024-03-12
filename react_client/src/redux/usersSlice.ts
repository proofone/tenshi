import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { createDB } from '../utils/indexedDB'
import { brahmaUser } from '../../../node_server/models/user'
import { testUsers }  from '../../../tests/users_test_data'


// Define a type for the slice state  #TODO: use main user type
export interface usersState {
  users: brahmaUser[]
}

// Define the initial state using that type
const initialState: usersState = {
    users: testUsers
}

// indexedDB initialization, can be omitted
let success, idb
createDB().then(res => {[success, idb] = res})
console.log(`IDB created: ${idb}`)

export const usersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    extend: (state, action: PayloadAction<brahmaUser[]>) => {
      state.users = state.users.concat(action.payload)
    }
  }
})

export const { extend } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer
