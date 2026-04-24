import React from 'react'

const Button = (props) => {
  return (
    <>
      <a className={`rounded ${props.color} py-2 px-5 font-semibold cursor-pointer active:scale-90`} href="#">{props.text}</a>
    </>
  )
}

export default Button
