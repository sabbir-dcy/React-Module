import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../firebase.init'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleEmailBlur = (e) => {
    setEmail(e.target.value)
  }
  const handlePassBlur = (e) => {
    setPass(e.target.value)
  }

  if (user) {
    navigate(from, {replace: true})
  }

  const handleUserSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(email, pass)
  }

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>login</h2>
        <form action='submit' onSubmit={handleUserSignIn}>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input
              onBlur={handleEmailBlur}
              type='email'
              name='email'
              id=''
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>password</label>
            <input
              onBlur={handlePassBlur}
              type='password'
              name='password'
              id='password'
              required
            />
          </div>
          <p style={{ color: 'red' }}>{error?.message}</p>
          {
            loading && <p>loading....</p>
          }
          <input className='form-submit' type='submit' value='login' required />
        </form>
        <p>
          New to Ema-joh?{' '}
          <Link className='form-link' to='/signup'>
            create account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
