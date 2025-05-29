import React, { useState, type FormEvent } from 'react'


interface Props {

  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onChange: (name: string, value: string) => void
  loginValues: LoginValues,
  disableButton?: boolean


}

interface LoginValues {
  email: string
  password: string
}

export const LoginForm: React.FC<Props> = ({ onChange, onSubmit, loginValues, disableButton = false }) => {

  const [show, setShow] = useState(false)

  const showPassword = () => {
    setShow(!show)
  }

  return (
    <div className='flex justify-center items-center min-h-screen '>

      <div className='max-w-md w-full space-y-8 ' >
        <div className='text-center'>
          <div className='flex justify-center'>
            <div className='bg-yellow-500 p-3 rounded-xl shadow-lg inline-flex'>
              <i className="fas fa-file-invoice-dollar text-white text-3xl"></i>
            </div>
          </div>
          <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
            Portal de Facturacion Tuvansa
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Ingresa tus credenciales para acceder al sistema
          </p>
        </div>

        <form onSubmit={onSubmit} className='mt-8 bg-white space-y-6 p-8 rounded-xl shadow-lg'>
          <div className='rounded-md shadow-sm space-y-4'>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  value={loginValues.email}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  className="input-focus appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="tu@correo.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  value={loginValues.password}
                  onChange={(e) => onChange(e.target.name, e.target.value)}
                  id="password"
                  name="password"
                  type={!show ? "password" : 'text'}
                  className="input-focus appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="••••••••" />
                <button
                  type="button"
                  id="togglePassword"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => {
                    showPassword()
                  }}
                >

                  {
                    !show ?
                      <i className="fas fa-eye text-gray-400 hover:text-gray-500 cursor-pointer"></i>
                      :
                      <i className="fas fa-eye-slash text-gray-400 hover:text-gray-500 cursor-pointer"></i>
                  }

                </button>
              </div>
            </div>

            <div className='flex justify-between items-center'>

              <div className='flex items-center'>

                <input type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />

                <label className='ml-2 block text-sm text-gray-700' > Recordar session</label>

              </div>



              <a href="#" className='font-medium text-sm text-indigo-600 hover:text-indigo-500'>
                ¿Olvidaste tu contraseña?
              </a>
            </div>


          </div>
          <button
            type='submit'
            className='transition-all duration-200 w-full flex justify-center font-medium relative bg-yellow-500 rounded-md text-white py-3 hover:bg-yellow-400'
            disabled={disableButton}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <i className="fas fa-sign-in-alt text-white group-hover:text-white"></i>
            </span>
            iniciar sesion
          </button>
        </form>

        <div className='text-center text-sm'>
          <span className='text-gray-600'>
            Nuevo en el sistema?
          </span>

          <a className=' cursor-pointer font-medium text-yellow-600 hover:text-yellow-500 trasition-all duration-200 ml-1' >
            Solicitar Acceso
          </a>

        </div>






      </div>
    </div>
  )
}
