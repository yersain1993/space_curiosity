import React from 'react'
import './Button.css'

const Button = ({ handleClick, handleClick2}) => {

  return (
    <button className='refresh' onClick={() => { handleClick(); handleClick2(); }}>
        <span className='icon'>
          <i className='fa-sharp fa-solid fa-arrow-rotate-right'></i>
        </span>
    </button>
  )
}

export default Button