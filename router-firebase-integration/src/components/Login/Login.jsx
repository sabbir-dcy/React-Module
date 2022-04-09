import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import { app } from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const auth = getAuth(app)
  const [signInWithGoogle, user] = useSignInWithGoogle(auth)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location?.state?.from?.pathname || '/'

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => navigate(from, { replace: true }))
  }
  return (
    <>
      <h2>plase login</h2>
      <button onClick={handleGoogleSignIn}>google signin</button>
      <br />
      <form>
        <input type='text' placeholder='your name' />
        <br />
        <input type='email' placeholder='your email' />
        <br />
        <input type='password' placeholder='password' />
        <br />
        <input type='submit' value='login' />
      </form>
    </>
  )
}

export default Login
