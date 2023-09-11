import React, { useState } from 'react'
import style from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form className={style.form} onSubmit={onSubmitHandler}>
      <input
        className={style.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        required
        placeholder="Enter new todo"
      />
      <button className={style.button} type="submit">
        Add
      </button>
    </form>
  )
}

export default TodoForm
