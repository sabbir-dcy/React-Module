import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.init'
import Social from './Social/Social'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'

const Login = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

  const location = useLocation()
  let from = location.state?.from?.pathname || '/'

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  if (user) {
    navigate(from, { replace: true })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    signInWithEmailAndPassword(email, password)
  }

  const handleResetPass = async() => {
    const email = emailRef.current.value
    await sendPasswordResetEmail(email)
    alert('mail sent')
  }

  return (
    <div className=' w-50 mx-auto'>
      <p>{(error && error?.message) || (loading && 'loading')}</p>
      <h2 className='text-primary'>please login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            ref={emailRef}
            type='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control
            ref={passwordRef}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          login
        </Button>
      </Form>
      <p>
        new to genius car?{' '}
        <span
          className='text-primary pe-auto'
          onClick={() => navigate('/register')}
        >
          please register
        </span>
      </p>
      <p>
        forget password?{' '}
        <span className='text-primary pe-auto' onClick={() => handleResetPass}>
          reset password
        </span>
      </p>

      <Social></Social>
    </div>
  )
}

export default Login
