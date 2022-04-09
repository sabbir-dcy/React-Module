import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import { app } from "../../firebase.init"

export function RequireAuth({ children }) {
  const [user] = useAuthState(getAuth(app))
  const location = useLocation()

  if (!user) {
    return <Navigate to='/Login' state={{ from: location }} replace />
  }

  return children
}
