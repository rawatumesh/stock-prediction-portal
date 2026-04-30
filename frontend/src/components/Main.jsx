import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <section className='flex flex-1 justify-center items-center px-20 my-10'>
        <div className='py-10 px-15 bg-gray-700 flex flex-col items-center gap-5 rounded'>
            <h1 className='text-4xl font-bold'>Stock Prediction App</h1>
            <p className='font-medium text-lg text-center'>This stock prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
            <Button color='bg-yellow-500' text='Login'/>
        </div>
      </section>
    </>
  )
}

export default Main
