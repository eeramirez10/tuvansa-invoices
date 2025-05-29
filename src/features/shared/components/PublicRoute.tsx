import { Navigate, Outlet } from 'react-router';
import useAuth from '../../auth/hooks/useAuth';

export const PublicRoute = () => {

    const { isAuthenticated   } = useAuth()



  return (
    isAuthenticated ? <Navigate to='/invoices' /> : <Outlet />
  )
}
