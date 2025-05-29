import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuth from '../../auth/hooks/useAuth'

export const PrivateRoute = () => {
  // const location =  useLocation()

  const { isAuthenticated } = useAuth()

  // const { isAuthenticated, renewToken, loading } = useAuth()

  // useEffect(() => {

  //   renewToken()

  // }, [location])



  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
