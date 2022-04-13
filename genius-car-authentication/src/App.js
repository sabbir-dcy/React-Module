import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Login from './Pages/account/Login'
import Register from './Pages/account/Register'
import RequireAuth from './Pages/account/RequireAuth'
import Checkout from './Pages/Checkout/Checkout'
import Home from './Pages/Home/Home/Home'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import NotFound from './Pages/Shared/NotFound/NotFound'
import { GlobalStyle } from './styles/styled.global'

function App() {
  return (
    <div className=''>
      <GlobalStyle />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route
          path='/service/:serviceId'
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route
          path='/checkout'
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
