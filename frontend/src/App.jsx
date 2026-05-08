import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import Private from './Private'
import Public from './Public'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Public><Register /></Public>} />
            <Route path='/login' element={<Public><Login /></Public>} />
            <Route path='/dashboard' element={<Private><Dashboard /></Private>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
