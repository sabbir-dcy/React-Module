import './App.css'
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import app from './firebase.init'
import {
  StyledBtn,
  StyledCard,
  StyledBtnContainer,
  StyledTitle,
  UserImg,
} from './styles/elemets.styled'
import { useState } from 'react'

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const gitHubProvider = new GithubAuthProvider()

  const googleSignInHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user)
        console.log(result.user)
      })
      .catch((error) => {
        console.error(error)
      })
    console.log('working')
  }

  const googleSignOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser({})
        console.log('signout successful')
      })
      .catch((error) => {
        setUser({})
        console.error(error)
      })
  }

  const gitHubSignHandler = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        setUser(result.user)
        console.log(result.user)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <StyledCard className='App'>
      <StyledTitle>simple firebase app</StyledTitle>
      <UserImg src={user.photoURL} alt='' />
      <h3>{user.displayName}</h3>
      <StyledBtnContainer>
        {user.uid ? (
          <StyledBtn
            bg='lightcoral'
            hoverBg='IndianRed'
            onClick={googleSignOutHandler}
          >
            signout
          </StyledBtn>
        ) : (
          <>
            <StyledBtn
              bg='lightseagreen'
              hoverBg='Teal'
              onClick={googleSignInHandler}
            >
              sign with google
            </StyledBtn>
            <StyledBtn
              bg='SlateGray'
              hoverBg='Black'
              onClick={gitHubSignHandler}
            >
              sign with github
            </StyledBtn>
          </>
        )}
      </StyledBtnContainer>
    </StyledCard>
  )
}

export default App
