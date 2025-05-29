import { Outlet } from 'react-router'
import { Header } from '../../../shared/components/Header'
import useAuth from '../../../auth/hooks/useAuth'





export const InvoicesLayout = () => {



  const { user } = useAuth()


  return (
    <>
      <Header userInfo={`${user?.name} ${user?.lastname}`} />

      <main className='max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8'>

        <Outlet />

      </main>

    </>
  )
}
