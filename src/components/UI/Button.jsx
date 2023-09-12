import React from 'react'
import style from './Button.module.css'

const Button = ({ onClick, children, title, disabled = false, className }) => {
  return (
    <>
      <button className={style.button} onClick={onClick} title={title} disabled={disabled}>
        {children}
      </button>
    </>
  )
}

export default Button
