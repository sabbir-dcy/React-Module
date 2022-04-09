import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { app } from '../../firebase.init'

function Home() {
  const auth = getAuth(app)
  const [user] = useAuthState(auth)
  return (
    <>
      <h2>this is home</h2>
      <p>current user is: {user ? user.displayName : 'no body'}</p>
    </>
  )
}

export default Home
