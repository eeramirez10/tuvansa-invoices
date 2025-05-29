import { type FormEvent } from 'react'
import useAuth from '../../hooks/useAuth'
import { LoginForm } from '../../components/LoginForm'


export const Login = () => {


  const { loginValues, handleLoginValues, onSubmit } = useAuth()





  const handleChange = (name: string, value: string) => {

    handleLoginValues(name, value)
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit()

  }





  return (

    <>

      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        loginValues={loginValues}
        disableButton={false}
      />







    </>



  )
}
