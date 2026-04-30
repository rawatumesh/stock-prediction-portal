import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
      <Link className={`rounded ${props.color} py-2 px-5 font-semibold cursor-pointer active:scale-90 text-black/90`} to={props.url}>{props.text}</Link>
    </>
  )
}

export default Button
