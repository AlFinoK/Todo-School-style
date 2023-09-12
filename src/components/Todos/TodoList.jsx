import React from 'react'
import style from './TodoList.module.css'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <>
      {!todos.length && <h2 className={style.emptyItem}>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </>
  )
}

export default TodoList
