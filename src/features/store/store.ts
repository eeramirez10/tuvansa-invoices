import { configureStore } from '@reduxjs/toolkit'

import AuthReducer, { preloadedAuth } from '../auth/store/authSlice'





export const store = configureStore({
  reducer: {
    auth: AuthReducer ,
    
  },
  preloadedState: {
    auth: preloadedAuth
  }
})

// Tipos inferidos para uso en hooks personalizados
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch