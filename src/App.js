import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
      }),
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <>
      <div className="wrapper">
        <h1 className="title">Todo App</h1>
        <TodoForm addTodo={addTodoHandler} />
        {!!todos.length && (
          <TodosActions
            resetTodos={resetTodosHandler}
            clearCompletedTodos={clearCompletedTodosHandler}
            completedTodosExist={!!completedTodosCount}
          />
        )}
        <TodoList
          completedTodosExist={completedTodosCount}
          toggleTodo={toggleTodoHandler}
          todos={todos}
          deleteTodo={deleteTodoHandler}
        />
      </div>
      <a className="signature" href="https://github.com/AlFinoK" target="blank">
        Nikita Rudenko's project
      </a>
    </>
  )
}

export default App
