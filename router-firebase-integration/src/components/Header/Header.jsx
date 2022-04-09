import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { app } from '../../firebase.init'
import * as S from './Header.styled'

const Header = () => {
  const auth = getAuth(app)
  const [user] = useAuthState(auth)

  return (
    <S.Navbr>
      <Link to='/'>home</Link>
      <Link to='/Order'>Order</Link>
      <Link to='/Products'>Products</Link>
      <Link to='/Register'>Register</Link>
      <span>{user?.displayName && user.displayName}</span>
      {user?.uid ? (
        <button onClick={() => signOut(auth)}>signout</button>
      ) : (
        <Link to='/Login'>Login</Link>
      )}
    </S.Navbr>
  )
}

export default Header
