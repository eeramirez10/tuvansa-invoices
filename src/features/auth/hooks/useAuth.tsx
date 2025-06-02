import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/useStore'
import { login, renewToken } from '../store/thunks'
import { logout } from '../store/authSlice'


interface LoginValues {
  email: string
  password: string
}

const useAuth = () => {

  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.auth.status)
  const error = useAppSelector(state => state.auth.error)
  const user = useAppSelector(state => state.auth.user)

  const [loginValues, setLoginValues] = useState<LoginValues>({
    email: '',
    password: ''
  })


  const isLoading = status === 'loading';

  const isAuthenticated = status === 'succeeded'



  const handleLoginValues = (name: string, value: string) => {
    setLoginValues(prev => ({ ...prev, [name]: value }))

  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const onSubmit = () => {

    if (!loginValues.email && !loginValues.password) return

    dispatch(login({ email: loginValues.email, password: loginValues.password }))
  }

  const renewAuthToken = () => {

    dispatch(renewToken())
  }

  

  return {
    loginValues,
    user,
    isAuthenticated,
    isLoading,
    error,
    handleLoginValues,
    onSubmit,
    renewAuthToken,
    handleLogout
    
  }
}

export default useAuth
