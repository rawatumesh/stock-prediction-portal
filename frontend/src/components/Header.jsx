import React, { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
    console.log('Logout')
  }
  return (
    <>
      <header className='header flex justify-between items-center py-5 px-15 bg-gray-700'>
        <Link className='text-2xl font-bold' to='/'>Stock Prediction Portal</Link>
        <div className='flex gap-5 items-center'>
          {isLoggedIn ? (<button onClick={handleLogout} className='bg-red-500 rounded py-2 px-5 font-semibold cursor-pointer active:scale-90'>Logout</button>) : (<><Button color='bg-yellow-500' text='Login' url='/login'/><Button color='bg-blue-500' text='Register' url='/register'/></>)}
        </div>
      </header>
    </>
  )
}

export default Header
