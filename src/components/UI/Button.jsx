import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
  const { children, disabled = false } = props
  return (
    <>
      <button {...props} className={style.button} disabled={disabled}>
        {children}
      </button>
    </>
  )
}

export default Button
