import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/router'
import useAuth from './features/auth/hooks/useAuth'
import { useEffect } from 'react'
import { LoaderFullScreen } from './features/shared/components/LoaderFullScreen'
import { Bounce, ToastContainer } from 'react-toastify'


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
            <ToastContainer
              position="bottom-center"
              autoClose={1000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
          
            />
          </>


      }

    </>

  )
}

export default App
