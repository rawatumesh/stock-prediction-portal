import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
      <header className='header flex justify-between items-center py-5 px-15 bg-gray-700'>
        <h1 className='text-2xl font-bold'>Stock Prediction Portal</h1>
        <div className='flex gap-5 items-center'>
            <Button color='bg-yellow-500' text='Login'/>
            <Button color='bg-blue-500' text='Register'/>
        </div>
      </header>
    </>
  )
}

export default Header
