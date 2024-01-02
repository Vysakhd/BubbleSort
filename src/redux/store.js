import { configureStore } from '@reduxjs/toolkit'
import bubbleReducer from './bubbleSlice'
export const store = configureStore({
  reducer: {
    bubble:bubbleReducer
  },
})