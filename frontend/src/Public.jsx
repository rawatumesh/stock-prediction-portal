import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const Public = ({children}) => {
    const { isLoggedIn } = useContext(AuthContext)
  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to='/dashboard' />
  )
}

export default Public
