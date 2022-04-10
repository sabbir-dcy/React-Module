import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError] = useState('')

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

  const navigate = useNavigate()
  if (user) {
    navigate('/shop')
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmBlur = (e) => {
    setConfirmPass(e.target.value)
  }
  const handleCreateUser = (e) => {
    e.preventDefault()
    if(password !== confirmPass) {
      setError('password did not match')
      return
    }
    if (password.length < 6) {
      setError('password must be 6 character atleast')
      return
    }

    createUserWithEmailAndPassword(email, password)
    .then(result =>{
      console.log(result.user)
    })
  }

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>sign up</h2>

        <form onSubmit={handleCreateUser}>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input onBlur={handleEmailBlur} type='email' name='email' id='' required />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>password</label>
            <input onBlur={handlePasswordBlur} type='password' name='password' id='password' required />
          </div>
          <div className='input-group'>
            <label htmlFor='confirm password'>confirm password</label>
            <input
              onBlur={handleConfirmBlur} type='password'
              name='confirm password'
              id='confirm-password'
              required
            />
          </div>
          <p>{error}</p>
          <input
            className='form-submit'
            type='submit'
            value='signup'
            required
          />
        </form>

        <p>
          Already have an account?{' '}
          <Link className='form-link' to='/login'>
            login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
