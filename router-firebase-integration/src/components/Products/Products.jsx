import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { app } from "../../firebase.init"


function Products() {
  const auth = getAuth(app)
  const [ user ] = useAuthState(auth)
  return (
    <>
      <h2>knock knock who is there</h2>
      <h5>{user ? user.displayName : 'unknown'}</h5>
    </>
  )
}

export default Products
