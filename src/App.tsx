import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/router'
import useAuth from './features/auth/hooks/useAuth'
import { useEffect } from 'react'
import { LoaderFullScreen } from './features/shared/components/LoaderFullScreen'
import { ToastContainer } from 'react-toastify'


function App() {

  const { renewAuthToken, isLoading } = useAuth()



  useEffect(() => {
    renewAuthToken()
  }, [])


  return (
    <>
      {

        isLoading ?
          <LoaderFullScreen /> :
          <>
            <RouterProvider router={router} />
            <ToastContainer />
          </>


      }

    </>

  )
}

export default App
