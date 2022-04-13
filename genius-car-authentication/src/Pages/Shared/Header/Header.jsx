import { signOut } from 'firebase/auth'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase.init'

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='primary'
        variant='dark'
      >
        <Container>
          <Navbar.Brand as={Link} to='/' href='#home'>
            logo here
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/home#services'>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to='/home#experts'>
                Experts
              </Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/about'>
                about
              </Nav.Link>
              {user ? (
                <button onClick={handleSignOut} className='btn btn-dark'>
                  signout
                </button>
              ) : (
                <Nav.Link eventKey={2} as={Link} to='/login'>
                  login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
