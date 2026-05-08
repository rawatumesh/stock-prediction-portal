import axios from 'axios'
import React, { useEffect } from 'react'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {

    const accessToken = localStorage.getItem('accessToken')
    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const response = await axiosInstance.get('/protected-view')
                console.log(response.data)
            }catch(error){
                console.error('Error fetching data: ', error)
            }
        }
        fetchProtectedData()
    }, [])

  return (
    <>
      <div>dashboard</div>
    </>
  )
}

export default Dashboard
