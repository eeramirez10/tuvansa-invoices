import useAuth from "../../auth/hooks/useAuth"


interface Props {
  userInfo: string
}


export const Header: React.FC<Props> = ({ userInfo }) => {

  const { handleLogout } = useAuth()
  return (

    <header className='bg-white shadow-sm fixed w-full  z-10'>
      <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center' >
        <div className='flex items-center'>
          <i className='fas fa-file-invoice text-blue-500  text-2xl mr-3'></i>
          <h1 className='text-xl font-bold text-gray-800'>Descarga Facturas</h1>
        </div>
        <div className='flex items-center space-x-4 '>
          <div className='relative flex '>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <i className='fas fa-user text-gray-400'></i>
            </div>
            <span className='pl-10 pr-4 py-2 rounded-md bg-gray-100 text-gray-700'>{userInfo}</span>
          </div>

          <button
            onClick={handleLogout}
            className='px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rouded-md flex items-center '>
            <i className='fas fa-sign-out-alt mr-2'></i> Salir
          </button>
        </div>


      </div>
    </header>
  )
}
