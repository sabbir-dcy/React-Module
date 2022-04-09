import { GlobalStyle } from './theme/GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import Products from './components/Products/Products'
import Order from './components/Orders/Order'
import { RequireAuth } from './components/RequireAuth/RequireAuth'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/Order' element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  )
}

export default App
