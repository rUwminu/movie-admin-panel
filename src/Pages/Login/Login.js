import { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { login } from '../../context/AuthContext/ApiCall'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, isFetching, dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    login({ email, password }, dispatch)
  }

  useEffect(() => {
    if (user) {
      history.push('/movie-admin-panel')
    }
  }, [user])

  return (
    <Container>
      <form className='form'>
        <h1 className='title'>Admin Panel Login</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='email'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        />
        <button
          onClick={(e) => handleLogin(e)}
          disable={isFetching}
          className='btn-login'
        >
          Login
        </button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    w-screen
    h-screen
    flex
    items-center
    justify-center
  `}

  .form {
    ${tw`
        w-full
        max-w-sm
        flex
        flex-col  
    `}

    .title {
      ${tw`
        mb-3
        text-xl
      `}
    }

    input {
      ${tw`
        py-2
        px-2
        mb-4
        border
        rounded-sm
        focus:outline-none
      `}
    }

    .btn-login {
      ${tw`
        mt-3
        py-3
        text-white
        bg-gradient-to-r
        from-blue-700
        to-indigo-700
        rounded-sm
        transition
        duration-200
        ease-in-out
        hover:bg-blue-600
        hover:shadow-xl
      `}
    }
  }
`

export default Login
