import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginResponse, User } from "../services/types";
import { login, renewToken } from "./thunks";
import type { RootState } from "../../store/store";

const token = localStorage.getItem('token')


interface AuthState {

  user: User | null
  token: string | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null

}


export const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  error: null
}

export const preloadedAuth: AuthState = {
  user: null,
  token: token,
  status: "idle",
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.status = 'idle'
      state.error = null
      // además limpia el localStorage si lo usas
      localStorage.removeItem('token')
    },
    resetError: (state) => {
      state.error = null
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.status = 'succeeded'
        state.user = action.payload.user
        state.token = action.payload.token
        state.error = null

        localStorage.setItem('token', action.payload.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'erroro desconocido'
      })
      .addCase(renewToken.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(renewToken.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload.user
        state.token = action.payload.token

      })
      .addCase(renewToken.rejected, state => {
        state.status = 'failed'
        state.token = null
        localStorage.removeItem('token')
      })
  }
})

export const { logout, resetError } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectAuthStatus = (state: RootState) => state.auth.status
export const selectAuthError = (state: RootState) => state.auth.error
export const selectAuthToken = (state: RootState) => state.auth.token