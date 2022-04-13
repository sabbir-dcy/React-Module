import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.init'
import Social from './Social/Social'
import { sendEmailVerification } from 'firebase/auth'

const Register = () => {
  const [agreed, setAgreed] = useState(false)
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, sendEmailVerification)

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)

  const handleRegister = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const name = e.target.name.value
    const password = e.target.password.value

    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: name })
    alert('Updated profile')
    navigate('/home')
  }

  return (
    <div className='register-form'>
      <h2 className='text-primary'>please register</h2>
      <form
        onSubmit={handleRegister}
        className='d-flex flex-column align-items-center'
      >
        <label htmlFor='name'>name</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='email'>email</label>
        <input type='email' name='email' id='email' required />
        <label htmlFor='password'>password</label>
        <input type='password' name='password' id='password' required />
        <div>
          <input
            onClick={() => setAgreed(!agreed)}
            type='checkbox'
            name='term'
            id='terms'
          />
          <label
            // className={agreed ? 'ps-2 text-success' : 'ps-2 text-danger'}
            className={`ps-2 ${agreed ? 'text-success' : 'text-danger'}`}
            htmlFor='terms'
          >
            accept terms and conditions
          </label>
        </div>
        <input type='submit' value='register' disabled={!agreed} />
        <Link to='/login'>already have an account?</Link>
      </form>
      <Social></Social>
    </div>
  )
}

export default Register
