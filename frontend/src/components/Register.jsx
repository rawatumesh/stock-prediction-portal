import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [email, setEmail] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)

    const userData = {
      email, first_name, last_name, password
    }

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      setErrors({})
      setSuccess(true)
      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
    }catch(error){
      console.error('Registration error: ', error.response.data)
      setSuccess(false)
      setErrors(error.response.data)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
     <section className='flex flex-1 justify-center items-center my-10'>
      <div className='py-10 px-10 bg-gray-700 rounded-xl'>
        <h2 className='font-bold text-2xl px-30 mb-5'>Create Your Account</h2>
        <form onSubmit={handleRegistration} className='flex flex-col gap-5 items-center'>
          {success && <div className='bg-green-300 text-green-900 text-lg font-semibold text-center w-full py-5 rounded mb-2'>Registration successful</div>}
          <div className='w-full'>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='focus:outline-none focus:ring-3 focus:ring-blue-500  bg-white text-gray-950 px-4 py-2 rounded w-full'/>
            <small>{errors.email && <div className='text-red-500 text-sm font-semibold'>{errors.email}</div>}</small>
          </div>
          <div className='w-full'>
            <input type='text' placeholder='Enter First Name' value={first_name} onChange={(e)=>{setFirstName(e.target.value)}} className='focus:outline-none focus:ring-3 focus:ring-blue-500  bg-white text-gray-950 px-4 py-2 rounded w-full'/>
            <small>{errors.first_name && <div className='text-red-500 text-sm font-semibold'>{errors.first_name}</div>}</small>
          </div>
          <div className='w-full'>
            <input type='text' placeholder='Enter Last Name' value={last_name} onChange={(e)=>{setLastName(e.target.value)}} className='focus:outline-none focus:ring-3 focus:ring-blue-500  bg-white text-gray-950 px-4 py-2 rounded w-full'/>
            <small>{errors.last_name && <div className='text-red-500 text-sm font-semibold'>{errors.last_name}</div>}</small>
          </div>
          <div className='w-full'>
            <input type='password' placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='focus:outline-none focus:ring-3 focus:ring-blue-500  bg-white text-gray-950 px-4 py-2 rounded w-full'/>
            <small>{errors.password && <div className='text-red-500 text-sm font-semibold'>{errors.password}</div>}</small>
          </div>
          {loading ? (<button disabled className='mt-5 bg-blue-500 text-center w-fit px-5 py-2 rounded text-black/90 font-semibold text-lg'><FontAwesomeIcon icon={faSpinner} spin/>Please Wait..</button>) : (<button type='submit' className='mt-5 bg-blue-500 text-center w-fit px-5 py-2 rounded active:scale-90 text-black/90 font-semibold'>Register</button>)}
        </form>
      </div>
      </section>
    </>
  )
}

export default Register
