import { createAsyncThunk } from "@reduxjs/toolkit"
import type { LoginCredentials, LoginResponse } from "../services/types"
import { loginService, renewTokenService } from "../services/api"

export const login = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  {
    rejectValue: string
  }
>('auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await loginService(credentials)

      return data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue('Error de red')
    }
  })


export const renewToken = createAsyncThunk<
  LoginResponse,
  void,
  { rejectValue: string }
>(
  'auth/renew',
  async (_, thunkAPI) => {

    try {

      const data = await renewTokenService()

      localStorage.setItem('token', data.token)

      return data

    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue('Error de red')
    }

  }
)