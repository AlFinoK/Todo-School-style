import React from 'react'
import style from './TodoList.module.css'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleTodo, completedTodosExist }) => {
  return (
    <>
      {!todos.length && <h2 className={style.emptyItem}>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
      {completedTodosExist > 0 ? (
        <h2 className={style.emptyCompleted}>
          You've {completedTodosExist} completed {completedTodosExist > 1 ? 'todos' : 'todo'}
        </h2>
      ) : (
        ''
      )}
    </>
  )
}

export default TodoList
