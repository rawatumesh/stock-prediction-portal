import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header flex justify-between items-center py-5 px-15 bg-gray-700'>
        <Link className='text-2xl font-bold' to='/'>Stock Prediction Portal</Link>
        <div className='flex gap-5 items-center'>
            <Button color='bg-yellow-500' text='Login' url='/login'/>
            <Button color='bg-blue-500' text='Register' url='/register'/>
        </div>
      </header>
    </>
  )
}

export default Header
