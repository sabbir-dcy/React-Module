import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth'
import { app } from './firebase.init'

import Font from './components/Font/Font'

import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [validated, setValidated] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [name, setName] = useState('')

  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handleNameBlur = (event) => {
    setName(event.target.value)
  }

  const handlePasswordBlur = (event) => {
    setPass(event.target.value)
  }

  const handleRegeisteredChange = (event) => {
    setRegistered(event.target.checked)
  }

  const hadleFromSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (registered) {
      signInWithEmailAndPassword(auth, email, pass)
        .then((result) => {
          console.log(result.user)
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      console.log(email, pass)

      createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
          console.log(result.user)
          setEmail('')
          setPass('')
          verifyEmail()
          setUserName()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => console.log('updating name'))
      .catch((error) => {
        console.log(error)
      })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() =>
      console.log('varification email sent')
    )
  }

  const handlePassReset = () => {
    sendPasswordResetEmail(auth, email).then(() =>
      console.log('reset email sent')
    )
  }

  return (
    <div className='App'>
      {/* <Font></Font> */}
      <div className='w-50 mx-auto mt-4'>
        <h2 className='text-primary'>
          please {registered ? 'login' : 'please register'}
        </h2>
        <Form noValidate validated={validated} onSubmit={hadleFromSubmit}>
          {/* email group */}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type='email'
              placeholder='Enter email'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email.
            </Form.Control.Feedback>
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {/* name group */}
          {!registered && (
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Your name</Form.Label>
              <Form.Control
                onBlur={handleNameBlur}
                type='text'
                placeholder='Enter name'
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide your own name.
              </Form.Control.Feedback>
            </Form.Group>
          )}

          {/* pass group */}
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type='password'
              placeholder='Password'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              onChange={handleRegeisteredChange}
              type='checkbox'
              label='already have an account?'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            {registered ? 'Login' : 'Signup'}
          </Button>
          <Button onClick={handlePassReset} variant='link'>
            forget password
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default App
