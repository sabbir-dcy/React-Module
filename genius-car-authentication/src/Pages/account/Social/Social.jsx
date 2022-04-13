import React, { useEffect } from 'react'
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase.init'

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (user || user1) {
      navigate('/home')
    }
  }, [navigate, user, user1])

  const handleSignInGoogle = () => {
    signInWithGoogle()
  }

  const handleSignInWithGithub = () => {
    signInWithGithub()
  }
  return (
    <div>
      <p>
        {((error || error1) && `${error?.message} ${error1?.message}`) ||
          (loading && 'loading')}
      </p>

      <div className='d-flex align-items-center gap-2'>
        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
        <p className='m-0'>or</p>
        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
      </div>
      <div className='d-flex flex-column align-items-center gap-2'>
        <button
          className='btn btn-light w-50 border'
          onClick={handleSignInGoogle}
        >
          google
          <img
            style={{ height: '20px', width: '20px', marginLeft: '10px' }}
            src='https://img.icons8.com/color/452/google-logo.png'
            alt=''
          />
        </button>
        <button className='btn btn-light w-50 border'>
          facebook
          <img
            style={{ height: '20px', width: '20px', marginLeft: '10px' }}
            src='https://img.icons8.com/fluency/344/facebook-new.png'
            alt=''
          />
        </button>
        <button className='btn btn-light w-50 border' onClick={handleSignInWithGithub}>
          github
          <img
            style={{ height: '20px', width: '20px', marginLeft: '10px' }}
            src='https://img.icons8.com/ios-filled/344/github.png'
            alt=''
          />
        </button>
      </div>
    </div>
  )
}

export default Social
