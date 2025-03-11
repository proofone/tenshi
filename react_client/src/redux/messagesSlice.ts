import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Message, FeedItem } from '../../../node_server/models/messages'


// Define a type for the slice state 
export interface messagesState {
    messages: Message[]
}

const initialState: messagesState = {
    messages: []
}

export const messagesSlice = createSlice({
  name: 'messages',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `message.payload`
    extend: (state, message: PayloadAction<Message[]>) => {
      state.messages = state.messages.concat(message.payload)
    }
  }
})

export const { extend } = messagesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) => state.messages

export default messagesSlice.reducer
