
import { Navigate, Outlet } from 'react-router'
import useAuth from '../../auth/hooks/useAuth'


export const PrivateRoute = () => {
  // const location =  useLocation()



  const {   isAuthenticated } = useAuth()





  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
