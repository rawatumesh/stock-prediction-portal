import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const userData = {
      email, password
    }

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setIsLoggedIn(true)
      console.log('Login successful')
      navigate('/')
    }catch(error){
      console.error('Invalid credentials')
      setError('Invalid credentials')
    }finally{
    setLoading(false)
    }
  }

  return (
    <>
     <section className='flex flex-1 justify-center items-center my-10'>
      <div className='py-10 px-10 bg-gray-700 rounded-xl'>
        <h2 className='font-bold text-2xl px-30 mb-5'>Login to Portal</h2>
        <form onSubmit={handleLogin} className='flex flex-col gap-5 items-center'>
          <div className='w-full'>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='focus:outline-none focus:ring-3 focus:ring-yellow-500  bg-white text-gray-950 px-4 py-2 rounded w-full'/>
          </div>
          <div className='w-full'>
            <input type='password' placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='focus:outline-none focus:ring-3 focus:ring-yellow-500  bg-white text-gray-950 px-4 py-2 rounded w-full'/>
          </div>
          {error && <div className='text-red-500 font-semibold text-lg'>{error}</div>}
          {loading ? (<button disabled className='mt-2 bg-yellow-500 text-center w-fit px-5 py-2 rounded text-black/90 font-semibold text-lg'><FontAwesomeIcon icon={faSpinner} spin/>&emsp;Please Wait..</button>) : (<button type='submit' className='mt-2 bg-yellow-500 text-center w-fit px-5 py-2 rounded active:scale-90 text-black/90 font-semibold'>Login</button>)}
        </form>
      </div>
      </section>
    </>
  )
}

export default Login
